import React from "react";
import { Container } from "react-bootstrap";

const Footer = ({ children }) => {
  return (
    <Container className="footer" fluid>
      {children}
    </Container>
  );
};

export default Footer;
