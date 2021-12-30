import React from "react";
import type { LinkProps } from "next/link";
import NextLink from "next/link";

const Link = ({ children, ...rest }: React.PropsWithChildren<LinkProps>) => {
  return (
    <NextLink {...rest}>
      <a className="transition-colors duration-300 underline decoration-2 underline-offset-2 decoration-wavy decoration-yellow-400 hover:decoration-pink-400">
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
