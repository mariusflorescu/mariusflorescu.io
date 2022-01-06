import React from "react";
import { useRouter } from "next/router";
import Item from "./Item";
import Container from "@components/Container";
import ThemeChanger from "@components/ThemeChanger";

type TRoute = {
  name: string;
  href: string;
};

const Nav = () => {
  const router = useRouter();
  const title = router.pathname?.split("/")[1];

  return (
    <nav className="p-6 fixed top-0 w-full backdrop-blur-lg backdrop-saturate-200">
      <Container className="flex justify-between items-center">
        <span className="opacity-0 md:opacity-100 prose prose-gray dark:prose-invert">
          <em className="text-gray-600 dark:text-gray-400 text-sm">
            {title === "" ? "home" : title}
          </em>
        </span>
        <ul className="list-none flex justify-end items-center space-x-6 font-medium">
          {routes.map((route: TRoute) => (
            <Item key={route.name} href={route.href} passHref>
              {route.name}
            </Item>
          ))}
          <li>
            <ThemeChanger />
          </li>
        </ul>
      </Container>
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
];

export default Nav;
