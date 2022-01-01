import React from "react";

const Container: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => (
  <div className={`min-h-full container mx-auto ${props.className}`}>
    {children}
  </div>
);

export default Container;
