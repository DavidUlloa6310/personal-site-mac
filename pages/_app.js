import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Title and viewport belong in _app, not _document. */}
      <Head>
        <title>David Ulloa | Macintosh, 1984</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {GA_ID && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />

          <Script id="gtag-config" strategy="lazyOnload">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
          </Script>
        </>
      )}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
