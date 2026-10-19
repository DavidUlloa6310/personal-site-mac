"""Add hand-drawn glyphs to the site's pixel body font (public/fonts/monaco.woff2).

The font only ships 97 glyphs, so characters like "&", dashes and accented
letters fell back to a smooth system font. This draws the missing ones on the
same 1/16 em pixel grid and writes public/fonts/monaco-extended.woff2.

Run: python3 scripts/extend-pixel-font.py   (needs: pip install fonttools brotli)
"""

from fontTools.pens.pointInsidePen import PointInsidePen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib import TTFont

SRC = "public/fonts/monaco.woff2"
OUT = "public/fonts/monaco-extended.woff2"
PX = 64  # font units per pixel (unitsPerEm 1024 / 16)

# New glyphs: (top row y, rows top to bottom, advance in pixels).
# Row y=0 is the baseline row, caps span y=0..6, x-height is y=0..4.
GLYPHS = {
    "&": (6, ["..##..", ".#..#.", ".#..#.", "..##..", ".#.#.#", ".#..#.", "..##.#"], 7),
    "~": (4, [".##.#", "#.##."], 6),
    "–": (3, ["#####"], 6),
    "—": (3, ["########"], 9),
    "…": (0, ["#.#.#"], 6),
    "•": (3, ["##", "##"], 3),
    "°": (6, [".#.", "#.#", ".#."], 4),
    "×": (3, ["#.#", ".#.", "#.#"], 4),
    "÷": (4, [".#.", "...", "###", "...", ".#."], 4),
    "¡": (4, ["#", ".", "#", "#", "#", "#", "#"], 2),
    "¿": (4, ["..#..", ".....", "..#..", ".#...", "#....", "#...#", ".###."], 6),
    "£": (6, ["..##.", ".#..#", ".#...", "###..", ".#...", ".#...", "#####"], 6),
    "€": (6, ["..###", ".#...", "####.", ".#...", "####.", ".#...", "..###"], 6),
}

# Accents drawn over an existing base glyph: (top row y, rows, x offset).
ACUTE_LOWER = (7, ["..#", ".#."], 1)
GRAVE_LOWER = (7, [".#.", "..#"], 1)
DIAERESIS_LOWER = (6, ["#.#"], 1)
CIRCUMFLEX_LOWER = (7, [".#.", "#.#"], 1)
TILDE_LOWER = (7, [".#.#", "#.#."], 0)
ACUTE_UPPER = (8, ["..#", ".#."], 1)
GRAVE_UPPER = (8, [".#.", "..#"], 1)
DIAERESIS_UPPER = (7, ["#.#"], 1)
TILDE_UPPER = (8, [".#.#", "#.#."], 0)
CEDILLA = (-1, [".#", "##"], 1)

ACCENTED = {
    "á": ("a", ACUTE_LOWER), "à": ("a", GRAVE_LOWER), "ä": ("a", DIAERESIS_LOWER),
    "â": ("a", CIRCUMFLEX_LOWER), "ã": ("a", TILDE_LOWER),
    "é": ("e", ACUTE_LOWER), "è": ("e", GRAVE_LOWER), "ë": ("e", DIAERESIS_LOWER),
    "ê": ("e", CIRCUMFLEX_LOWER),
    "ó": ("o", ACUTE_LOWER), "ò": ("o", GRAVE_LOWER), "ö": ("o", DIAERESIS_LOWER),
    "ô": ("o", CIRCUMFLEX_LOWER), "õ": ("o", TILDE_LOWER),
    "ú": ("u", ACUTE_LOWER), "ù": ("u", GRAVE_LOWER), "ü": ("u", DIAERESIS_LOWER),
    "û": ("u", CIRCUMFLEX_LOWER),
    "ñ": ("n", TILDE_LOWER), "ç": ("c", CEDILLA),
    "Á": ("A", ACUTE_UPPER), "É": ("E", ACUTE_UPPER), "Í": ("I", ACUTE_UPPER),
    "Ó": ("O", ACUTE_UPPER), "Ú": ("U", ACUTE_UPPER), "À": ("A", GRAVE_UPPER),
    "È": ("E", GRAVE_UPPER), "Ü": ("U", DIAERESIS_UPPER), "Ö": ("O", DIAERESIS_UPPER),
    "Ä": ("A", DIAERESIS_UPPER), "Ñ": ("N", TILDE_UPPER), "Ç": ("C", CEDILLA),
}


def rasterize(font, char):
    """Return the set of lit (x, y) pixels of an existing glyph and its advance."""
    glyph_set = font.getGlyphSet()
    name = font.getBestCmap()[ord(char)]
    advance = font["hmtx"][name][0] // PX
    pixels = set()
    for y in range(-3, 10):
        for x in range(advance + 1):
            pen = PointInsidePen(glyph_set, (x * PX + PX / 2, y * PX + PX / 2))
            glyph_set[name].draw(pen)
            if pen.getResult():
                pixels.add((x, y))
    return pixels, advance


def pattern_pixels(top, rows, x_offset=0):
    return {
        (x + x_offset, top - i)
        for i, row in enumerate(rows)
        for x, cell in enumerate(row)
        if cell == "#"
    }


def draw(pixels):
    """Build a glyf glyph from pixels, one rectangle per horizontal run."""
    pen = TTGlyphPen(None)
    for y in sorted({y for _, y in pixels}):
        xs = sorted(x for x, py in pixels if py == y)
        start = prev = xs[0]
        for x in xs[1:] + [None]:
            if x is not None and x == prev + 1:
                prev = x
                continue
            x0, x1, y0, y1 = start * PX, (prev + 1) * PX, y * PX, (y + 1) * PX
            pen.moveTo((x0, y0))
            pen.lineTo((x0, y1))
            pen.lineTo((x1, y1))
            pen.lineTo((x1, y0))
            pen.closePath()
            if x is not None:
                start = prev = x
    return pen.glyph()


def add_glyph(font, char, pixels, advance):
    name = f"uni{ord(char):04X}"
    glyph = draw(pixels)
    font["glyf"][name] = glyph
    glyph.recalcBounds(font["glyf"])
    font["hmtx"][name] = (advance * PX, glyph.xMin if pixels else 0)
    for table in font["cmap"].tables:
        if table.isUnicode():
            table.cmap[ord(char)] = name
    if name not in font.getGlyphOrder():
        font.setGlyphOrder(font.getGlyphOrder() + [name])


def main():
    font = TTFont(SRC)
    existing = font.getBestCmap()
    for char, (top, rows, advance) in GLYPHS.items():
        if ord(char) not in existing:
            add_glyph(font, char, pattern_pixels(top, rows), advance)
    for char, (base, (top, rows, x_offset)) in ACCENTED.items():
        if ord(char) in existing:
            continue
        pixels, advance = rasterize(font, base)
        add_glyph(font, char, pixels | pattern_pixels(top, rows, x_offset), advance)
    font["maxp"].numGlyphs = len(font.getGlyphOrder())
    font.flavor = "woff2"
    font.save(OUT)
    print(f"wrote {OUT} with {len(font.getBestCmap())} characters")


if __name__ == "__main__":
    main()
