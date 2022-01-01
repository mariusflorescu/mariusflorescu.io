import React from "react";

const Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return (
    <div className="w-full prose prose-neutral dark:prose-invert">
      <h1
        className="py-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-400 to-purple-400"
        {...props}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
