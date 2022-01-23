import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

type TProps = {
  title?: string;
  description?: string;
  imageURL?: string;
};

const Meta: React.FC<TProps> = ({
  title = "Marius Florescu",
  description = "A blog fullfilled with curiosities and good vibes.",
  imageURL = "https://www.mariusflorescu.io/ogimg.png",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:url" content="https://www.mariusflorescu.io" />
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
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: "https//www.mariusflorescu.io",
          title,
          description,
          site_name: "MariusFlorescu",
          images: [
            {
              url: "https://www.mariusflorescu.io/ogimg.png",
              alt: "Open Graph Image",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@_mariusflorescu",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default Meta;
