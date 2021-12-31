import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => (
  <Container>
    <div className="h-full flex flex-col">
      <Nav />
      <div className="py-3 grow">{children}</div>
      <Footer />
    </div>
  </Container>
);

export default Layout;
