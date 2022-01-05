import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => (
  <div className="w-full h-full flex flex-col">
    <Nav />
    <Container className="p-6 flex-1">
      <div className="w-full h-full flex flex-col">
        <article className="w-full py-3 grow prose prose-gray dark:prose-invert">
          {children}
        </article>
        <Footer />
      </div>
    </Container>
  </div>
);

export default Layout;
