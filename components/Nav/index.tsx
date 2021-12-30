import Item from "./Item";

const Nav = () => {
  return (
    <ul className="list-none py-2 w-full flex justify-end items-center space-x-6 font-semibold">
      <Item href="/" passHref>
        home
      </Item>
      <Item href="/blog" passHref>
        blog
      </Item>
      <Item href="/contact" passHref>
        contact
      </Item>
    </ul>
  );
};

export default Nav;
