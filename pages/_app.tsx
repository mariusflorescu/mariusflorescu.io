import React from "react";
import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@types";
import Providers from "@components/Providers";
import "@styles/globals.css";
// import "@styles/prism.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
