import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Container, Row, Col } from "react-bootstrap";

//import ItemButton from "./ItemButton";
import FooterButton from "./FooterButtons";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBoard: {},
      footerOptions: []
    };
  }

  componentDidUpdate(prevProps) {
    const { menu } = this.props;
    // Uso tipico (no olvides de comparar los props):
    if (menu !== prevProps.menu) {
      console.log("hola, soy componend did update");
      this.setState({
        footerOptions: Object.keys(menu)
      });
    }
  }

  render() {
    const { menu } = this.props;
    const { footerOptions } = this.state;

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
      <div>
        <p>Hola soy el menú y voy a pintar:</p>
        <Container>
          <Row>{mappedFooterButtons}</Row>
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
