import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
  const proseHeadings = `prose-headings:underline prose-headings:underline-offset-2 prose-heading:decoration`;
  const proseHeading1 = `prose-h1:text-5xl`;
  const proseAnchor = `prose-a:after:content-['↗'] prose-a:after:ml-0.5 prose-a:decoration-2 prose-a:decoration-transparent prose-a:transition-all prose-a:duration-200 prose-a:text-neutral-500 prose-a:dark:text-neutral-400 hover:prose-a:text-neutral-800 hover:prose-a:dark:text-neutral-50 hover:prose-a:decoration-neutral-800 hover:prose-a:dark:decoration-neutral-50`;
  const prosePre = `prose-pre:bg-black prose-pre:text-neutral-100`;
  const proseListItem = `prose-li:my-1`;
  const proseHr = `prose-hr:border-t prose-hr:border-neutral-200 prose-hr:dark:border-neutral-700 prose-hr:my-6`;
  const proseEm = `prose-em:font-playfair`;

  return (
    <Container>
      <div className="h-full w-full flex flex-col">
        <Nav />
        <article
          className={`min-w-full py-3 grow prose prose-neutral dark:prose-invert ${proseHeadings} ${proseHeading1} ${proseAnchor} ${prosePre} ${proseListItem} ${prosePre} ${proseHr} ${proseEm}`}
        >
          {children}
        </article>
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
