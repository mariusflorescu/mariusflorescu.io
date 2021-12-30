import React from 'react'
import type { LinkProps } from 'next/link';
import NextLink from 'next/link'

const Item = ({children, ...rest} : React.PropsWithChildren<LinkProps>) => {
  return (
    <li className="relative group">
      <span className="absolute bottom-0 w-0 h-1 bg-gradient-to-r from-yellow-500 via-pink-400 to-purple-400 transition-all group-hover:w-full" />
      <a className="relative cursor-pointer">
        <NextLink {...rest}>
            {children}
        </NextLink>
      </a>
    </li>
  );
};

export default Item