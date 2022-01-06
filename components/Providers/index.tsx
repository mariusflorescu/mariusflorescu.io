import React from "react";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@components/MDXComponents";

const WithProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </ThemeProvider>
  );
};

export default WithProviders;
