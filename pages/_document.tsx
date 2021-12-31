import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital@1&family=Mulish:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="h-full font-mulish  bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 selection:bg-neutral-700 selection:text-neutral-100  selection:dark:bg-neutral-200 selection:dark:text-neutral-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
