import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="min-h-full" lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-full font-inter bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 selection:bg-pink-400 selection:text-white selection:dark:bg-yellow-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
