import React from "react";

const Container: React.FC = ({ children }) => {
  return <div className="h-full container mx-auto p-6">{children}</div>;
};

export default Container;
