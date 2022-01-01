import React from "react";
import GradientText from "@components/GradientText";

const Title: React.FC<
  React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  >
> = ({ children, ...props }) => {
  return (
    <div className="w-full prose prose-neutral dark:prose-invert">
      <GradientText as="h1" className="py-12" {...props}>
        {children}
      </GradientText>
    </div>
  );
};

export default Title;
