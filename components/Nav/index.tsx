import React from "react";
import { useRouter } from "next/router";
import Item from "./Item";

type TRoute = {
  name: string;
  href: string;
};

const Nav = () => {
  const router = useRouter();
  const title = router.pathname?.split("/")[1];

  return (
    <nav className="w-full py-6 flex justify-between items-center">
      <span className="text-neutral-500 dark:text-neutral-400 font-merri text-sm">
        {title === "" ? "home" : title}
      </span>
      <ul className="list-none flex justify-end items-center space-x-6 font-semibold">
        {routes.map((route: TRoute) => (
          <Item key={route.name} href={route.href} passHref>
            {route.name}
          </Item>
        ))}
      </ul>
    </nav>
  );
};

const routes: TRoute[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "writings",
    href: "/writings",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

export default Nav;
