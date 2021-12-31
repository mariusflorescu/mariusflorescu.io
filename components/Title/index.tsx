import React from "react";
import GradientText from "../GradientText";

const Title: React.FC = ({ children }) => {
  return (
    <GradientText as="h1" className="font-merri py-12">
      {children}
    </GradientText>
  );
};

export default Title;
