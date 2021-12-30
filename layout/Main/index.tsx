import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";

const Layout: React.FC = ({ children }) => (
  <Container>
    <Nav />
    <div className="py-3">{children}</div>
  </Container>
);

export default Layout;
