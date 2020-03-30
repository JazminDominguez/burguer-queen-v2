import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Container, Row, Col } from "react-bootstrap";

//import ItemButton from "./ItemButton";
import FooterButton from "./FooterButtons";
import Footer from "./Footer";
import Header from "./Header";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBoard: {},
      footerOptions: [],
      mealType: undefined
    };
  }

  componentDidUpdate(prevProps) {
    const { menu, meal } = this.props;
    // Uso tipico (no olvides de comparar los props):
    if (menu !== prevProps.menu) {
      console.log("hola, soy componend did update");
      this.setState({
        footerOptions: Object.keys(menu),
        mealType: meal
      });
    }
  }

  render() {
    const { menu } = this.props;
    const { footerOptions, mealType } = this.state;

    if (Object.keys(menu).length === 0) {
      console.log("soy el menu vacio");
    } else {
      console.log("soy menu con info", menu.platillo.name);
      console.log("soy object keys", Object.keys(menu));
    }

    const mappedFooterButtons = footerOptions.map(option => (
      <Col>
        <FooterButton key={option} name={option} />
      </Col>
    ));

    return (
      <div className="menu-board">
        <Container fluid>
          <Row>
            <Col sm={8} md={8} style={{ paddingLeft: "0px" }}>
              <Header mealType={mealType} clientName={"Monica"} />
              <p>Hola soy el menú y voy a pintar:</p>
              <Footer>
                <Row>{mappedFooterButtons}</Row>
              </Footer>
            </Col>
            <Col sm={4} md={4} className="ticket-component">
              TICKET AREA
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

/* Comida tiene: platillo, bebidas, guarnición, ok, extras sin ingredientes
Desayuno tiene: platillo, bebidas, sin ingredientes, extras, ok
*/
