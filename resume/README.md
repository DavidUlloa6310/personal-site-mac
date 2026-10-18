# Resume

Put the LaTeX source here as `resume.tex` (plus any `.cls`, `.sty` or image files it uses).

On every push, `.github/workflows/deploy.yml` compiles it with `latexmk` (pdfLaTeX) and publishes the PDF at [davidulloa.dev/resume](https://davidulloa.dev/resume) (and `/resume.pdf`). Pull requests compile it too, so a LaTeX error fails the check before it reaches the site, and the built PDF is attached to the workflow run under **Artifacts** for a preview.

If the resume needs XeLaTeX or LuaLaTeX (for example it uses `fontspec`), add `latexmk_use_xelatex: true` or `latexmk_use_lualatex: true` to the "Build resume PDF" step.

Build locally with `latexmk -pdf resume.tex`.
