import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import type { NextPageWithLayout } from "@types";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@components/MDXComponents";
import "@styles/globals.css";
import "@styles/prism.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
