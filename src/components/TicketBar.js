import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import menu from "../assets/menu-180.png";
import config from "../assets/config-180.png";
import salir from "../assets/salir-180.png";
import userIcon from "../assets/user-180.png";

const TicketBar = ({ clientName, ticketItems }) => {
  return (
    <Container className="header" style={{ paddingLeft: "0px" }}>
      <Row>
        <Col className="icon-container">
          <Image src={menu} className="header-icons" />
        </Col>
        <Col className="icon-container">
          <Image src={config} className="header-icons" />
        </Col>
        <Col className="icon-container">
          <Image src={salir} className="header-icons" />
        </Col>
      </Row>
      <Row className="number-container">
        <Col md={3}>
          <Image src={userIcon} className="header-icons" />
        </Col>
        <Col md={9} style={{ fontSize: "22px", textAlign: "left" }}>
          {clientName}
        </Col>
      </Row>
      <Row>{ticketItems.item}</Row>
    </Container>
  );
};

export default TicketBar;
