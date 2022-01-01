import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => (
  <div className="w-full min-h-full">
    <Nav />
    <Container className="p-6">
      <div className="w-full min-h-full flex flex-col">
        <article className="w-full py-3 grow prose prose-neutral dark:prose-invert">
          {children}
        </article>
        <Footer />
      </div>
    </Container>
  </div>
);

export default Layout;
