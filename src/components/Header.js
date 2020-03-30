import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";

import userIcon from "../assets/user-180.png";
import burgerQueenIcon from "../assets/icon-180.png";

const Header = ({ mealType, clientName }) => {
  const numbers = [
    { value: 0, item: "0" },
    { value: 1, item: "1" },
    { value: 2, item: "2" },
    { value: 3, item: "3" },
    { value: 4, item: "4" },
    { value: 5, item: "5" },
    { value: 6, item: "6" },
    { value: 7, item: "7" },
    { value: 8, item: "8" },
    { value: 9, item: "9" }
  ];

  const listNumbers = numbers.map(number => {
    return (
      <Col key={number.value} id={number.value}>
        {number.item}
      </Col>
    );
  });

  return (
    <Container className="header">
      <Row>
        <Col>
          <Image src={burgerQueenIcon} className="header-icons" />
        </Col>
        <Col>{mealType}</Col>
        <Col>
          <Image src={userIcon} className="header-icons" />
        </Col>
        <Col>
          <p>{clientName}</p>
        </Col>
      </Row>
      <Row>{listNumbers}</Row>
    </Container>
  );
};

export default Header;
