import React from "react";

type TElement = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span";
};

type TProps = TElement &
  React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  >;

const GradientText: React.FC<TProps> = ({ children, as, ...props }) => {
  const className = `text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-400 to-purple-400  ${
    props.className || ""
  }`;

  return React.createElement(as, { ...props, className }, children);
};

export default GradientText;
