import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../config/theme";
import { CDN_VERSION_CONSTANT } from "../constants/misc";
import {
  SEO_DESCRIPTION,
  SEO_IMAGE,
  SEO_KEYWORDS,
  SEO_TITLE,
  SEO_TWITTER_CREATOR
} from "../constants/seo";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={SEO_DESCRIPTION} />
          <meta name="keywords" content={SEO_KEYWORDS} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={SEO_TWITTER_CREATOR} />
          <meta name="twitter:title" content={SEO_TITLE} />
          <meta name="twitter:description" content={SEO_DESCRIPTION} />
          <meta name="twitter:image" content={SEO_IMAGE} />

          <meta property="og:title" content={SEO_TITLE} key="ogtitle" />
          <meta property="og:description" content={SEO_TITLE} key="ogdesc" />

          <link rel="preconnect" href="https://rsms.me/" />
          <link
            rel="preload"
            as="style"
            href="https://rsms.me/inter/inter.css"
          />
          <link
            rel="stylesheet"
            href="https://rsms.me/inter/inter.css"
            media="print"
            // @ts-expect-error
            onLoad="this.media='all'"
          />
          <noscript>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          </noscript>

          <link
            rel="stylesheet"
            href={`${CDN_VERSION_CONSTANT}/codemirror.min.css`}
          />
          <link
            rel="stylesheet"
            href={`${CDN_VERSION_CONSTANT}/theme/dracula.min.css`}
          />
          <script src={`${CDN_VERSION_CONSTANT}/codemirror.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/mode/meta.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/mode/loadmode.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/mode/simple.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/mode/multiplex.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/selection/active-line.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/edit/matchbrackets.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/edit/closebrackets.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/hint/show-hint.min.js`}></script>
          <script src={`${CDN_VERSION_CONSTANT}/addon/hint/anyword-hint.min.js`}></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
