import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* OG META TAGS */}
        <meta property="og:title" content="David Ulloa - Macintosh, 1984" />
        <meta property="og:url" content="https://davidulloa.dev" />
        <meta
          property="og:image"
          content="https://davidulloa.dev/Macintosh.PNG"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="David Ulloa's personal site. Inspired by the original Macintosh 1984 OS."
        />

        <meta
          name="keywords"
          content="David Ulloa, David, Developer, Personal Site, Resume"
        />
        <meta
          name="description"
          content="David Ulloa's personal site. Inspired by the original Macintosh 1984 OS."
        />
        <meta name="author" content="David Ulloa" />
      </Head>

      <body className="cursor-mac overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
