import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Container, Row, Col } from "react-bootstrap";

import ItemButton from "./ItemButton";
import Header from "./Header";
import TicketBar from "./TicketBar";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      menuBoard: undefined,
      footerOptions: [],
      mealType: undefined,
      colorClass: undefined
    };
  }

  componentDidUpdate(prevProps) {
    const { menu, meal } = this.props;
    // Uso tipico (no olvides de comparar los props):
    if (menu !== prevProps.menu) {
      console.log("hola, soy componend did update");
      this.setState({
        footerOptions: Object.keys(menu),
        mealType: meal,
        isLoaded: true
      });
    }
  }

  handleChange = e => {
    const { addClient } = this.props;
    addClient(e.target.value);
  };

  render() {
    const { menu, clientName } = this.props;
    const { footerOptions, mealType, menuBoard, colorClass } = this.state;

    const setItems = option => {
      this.setState({
        menuBoard: menu[option],
        colorClass: [option]
      });
    };

    const mappedFooterButtons = footerOptions.map(option => (
      <Col md={3}>
        <div
          key={option}
          className={`footer-button ${option}`}
          onClick={() => setItems(option)}
        >
          <p>{option}</p>
        </div>
      </Col>
    ));

    return (
      <div className="menu-board">
        <Container fluid>
          <Row>
            <Col sm={8} md={8} style={{ paddingLeft: "0px" }}>
              <Row className="flex-column">
                <Col md={12}>
                  <Header mealType={mealType} addClient={this.handleChange} />
                </Col>
                <Col>
                  <div className="board">
                    <Row style={{ paddingLeft: "20px" }}>
                      {menuBoard !== undefined &&
                        menuBoard.map(item => (
                          <Col>
                            <ItemButton
                              icon={item.logo}
                              color={colorClass}
                              itemName={item.name}
                              itemPrice={item.price}
                            />
                          </Col>
                        ))}
                    </Row>
                  </div>
                </Col>
                <Col md={12} className="footer">
                  <Row style={{ paddingLeft: "20px" }}>
                    {mappedFooterButtons}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              sm={4}
              md={4}
              className="ticket-component"
              style={{ padding: "0px" }}
            >
              <TicketBar clientName={clientName} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, actionCreators)(Menu);
