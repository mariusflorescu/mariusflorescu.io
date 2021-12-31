import React from "react";

const inlineCode = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => (
  <code
    className="before:content-[''] after:content-[''] px-1 bg-neutral-200 dark:bg-neutral-800 rounded"
    {...props}
  ></code>
);

const MDXComponents = {
  inlineCode,
};

export default MDXComponents;
