import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@components/MDXComponents";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
