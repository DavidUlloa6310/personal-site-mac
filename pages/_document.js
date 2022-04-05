import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* OG META TAGS */}
      <meta property="og:title" content="David Ulloa - Macintosh, 1984" />
      <meta property="og:url" content="https://www.dulloa.com" />
      <meta
        property="og:image"
        content="https://www.dulloa.com/Macintosh.PNG"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="David Ulloa's personal site. Inspired by the original Macintosh 1984 OS."
      />

      <title>David Ulloa | Macintosh, 1984</title>
      <meta
        name="keywords"
        content="David Ulloa, David, Developer, Personal Site, Resume"
      ></meta>
      <meta
        name="description"
        content="David Ulloa's personal site. Inspired by the original Macintosh 1984 OS."
      ></meta>
      <meta name="author" content="David Ulloa"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className="cursor-mac overflow-hidden blur-[0.03em] saturate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
