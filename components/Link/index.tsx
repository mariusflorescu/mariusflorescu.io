import React from "react";
import type { LinkProps } from "next/link";
import NextLink from "next/link";

const Link = ({ children, ...rest }: React.PropsWithChildren<LinkProps>) => {
  return (
    <a className="cursor-pointer underline decoration-yellow-400 dark:decoration-yellow-400">
      <NextLink {...rest}>{children}</NextLink>
    </a>
  );
};

export default Link;
