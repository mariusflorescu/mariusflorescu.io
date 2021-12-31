import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
  const proseHeadings = `prose-headings:underline prose-headings:underline-offset-2 prose-heading:decoration prose-headings:decoration-yellow-400`;

  return (
    <Container>
      <div className="h-full flex flex-col">
        <Nav />
        <article
          className={`py-3 grow prose prose-neutral dark:prose-invert ${proseHeadings}`}
        >
          {children}
        </article>
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
