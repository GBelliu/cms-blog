import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Cat Love You</title>
        <meta name="title" content="Cat Love You -" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cms-blog-flame.vercel.app/" />
        <meta property="og:title" content="Cat Love You -" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://cms-blog-flame.vercel.app/"
        />
        <meta property="twitter:title" content="Cat Love You -" />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
