import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Container, Row, Col, Image } from "react-bootstrap";

import breakfastIcon from "../assets/sandwich-180.png";
import mealIcon from "../assets/comida-180.png";

class ConnectedList extends React.Component {
  render() {
    return (
      <Container fluid className="mealType-container">
        <Row>
          <Col md={12} lg={6}>
            <NavLink to="/breakfast" onClick={this.props.fetchBreakfast}>
              <div className="icon-container">
                <Image src={breakfastIcon} />
                <p>Desayuno</p>
              </div>
            </NavLink>
          </Col>
          <Col md={12} lg={6}>
            <NavLink to="/meal" onClick={this.props.fetchMeal}>
              <div className="icon-container">
                <Image src={mealIcon} />
                <p>Comida</p>
              </div>
            </NavLink>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const List = connect(mapStateToProps, actionCreators)(ConnectedList);

export default List;
