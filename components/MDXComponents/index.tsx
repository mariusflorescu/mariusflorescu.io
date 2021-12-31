import React from "react";
import ContextMenu from "@components/ContextMenu";

const codeBlock = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >
) => {
  const ref = React.useRef<HTMLPreElement>(null);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    if (ref && ref.current) {
      setText(ref.current.innerText);
    }
  }, []);

  return (
    <ContextMenu textToCopy={text}>
      <pre ref={ref} {...props} />
    </ContextMenu>
  );
};

const inlineCode = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => (
  <code
    className="before:content-[''] after:content-[''] px-1 bg-neutral-200 dark:bg-neutral-800 rounded select-all"
    {...props}
  ></code>
);

const MDXComponents = {
  pre: codeBlock,
  inlineCode,
};

export default MDXComponents;
