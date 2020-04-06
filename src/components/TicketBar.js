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
      <Row className="flex-column">
        {ticketItems.map((item) => (
          <Col>
            <Row>
              <Col md={1}>
                <p>{item.price}</p>
              </Col>
              <Col md={8}>
                <p>{item.item}</p>
              </Col>
              <Col md={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z" />
                </svg>
              </Col>
              <Col md={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
                </svg>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TicketBar;
