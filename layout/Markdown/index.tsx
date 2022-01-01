import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
  const proseHeadings = `prose-headings:underline prose-headings:underline-offset-2 prose-heading:decoration`;
  const proseAnchor = `prose-a:transition-colors prose-a:duration-300 prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 prose-a:decoration-wavy prose-a:decoration-pink-400 hover:prose-a:decoration-yellow-400`;
  const prosePre = `prose-pre:bg-black prose-pre:text-neutral-100`;
  const proseListItem = `prose-li:my-1`;
  const proseHr = `prose-hr:border-t prose-hr:border-neutral-200 prose-hr:dark:border-neutral-700 prose-hr:my-6`;
  const proseEm = `prose-em:font-playfair`;

  return (
    <Container>
      <div className="h-full w-full flex flex-col">
        <Nav />
        <article
          className={`min-w-full py-3 grow prose prose-neutral dark:prose-invert ${proseHeadings} ${proseAnchor} ${prosePre} ${proseListItem} ${prosePre} ${proseHr} ${proseEm}`}
        >
          {children}
        </article>
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
