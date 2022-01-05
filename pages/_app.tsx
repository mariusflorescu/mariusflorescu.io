import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@components/MDXComponents";
import "@styles/globals.css";
import "@styles/prism.css";
import Layout from "@layout/Main";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
