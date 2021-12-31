import React from "react";
import { useRouter } from "next/router";
import Item from "./Item";
import ThemeChanger from "@components/ThemeChanger";

type TRoute = {
  name: string;
  href: string;
};

const Nav = () => {
  const router = useRouter();
  const title = router.pathname?.split("/")[1];

  return (
    <nav className="w-full py-6 flex justify-between items-center">
      <span className="opacity-0 md:opacity-100 text-neutral-600 dark:text-neutral-400 font-merri text-sm">
        {title === "" ? "home" : title}
      </span>
      <ul className="list-none flex justify-end items-center space-x-6 font-semibold">
        {routes.map((route: TRoute) => (
          <Item key={route.name} href={route.href} passHref>
            {route.name}
          </Item>
        ))}
        <li>
          <ThemeChanger />
        </li>
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
    name: "writing",
    href: "/writing",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

export default Nav;
