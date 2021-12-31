import React from "react";
import GradientText from "@components/GradientText";

const Title: React.FC<
  React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  >
> = ({ children, ...props }) => {
  return (
    <GradientText as="h1" className="font-merri py-12" {...props}>
      {children}
    </GradientText>
  );
};

export default Title;
