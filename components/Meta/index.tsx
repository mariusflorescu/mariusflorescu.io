import React from 'react'
import Head from 'next/head'

type TProps = {
  title?: string
  description?: string
}

const imageURL = 'https://www.mariusflorescu.io/ogimg.png'

const Meta: React.FC<TProps> = ({
  title = 'Marius Florescu',
  description = 'A blog fullfilled with curiosities and good vibes.'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <meta property="og:title" content={title} key="og_title" />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="mariusflorescu.io" />
      <meta property="og:url" content="https://www.mariusflorescu.io" />
      <meta property="og:image" content={imageURL} />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_mariusflorescu" />
      <meta name="twitter:creator" content="@_mariusflorescu" />
      <meta name="apple-mobile-web-app-title" content="Marius Florescu" />
      <meta name="author" content="Marius Florescu" />
    </Head>
  )
}

export default Meta
