import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";

import ItemButtom from "./ItemButton";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBoard: {}
    };
  }

  render() {
    if (Object.keys(this.props.menu).length === 0) {
      console.log("soy menu vacio");
    } else {
      console.log("soy menu con info", this.props.menu.food.name);
    }

    console.log("soy el props del componente menu.js", this.props.menu);

    return (
      <div>
        <p>Hola soy el menú y voy a pintar:</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, actionCreators)(Menu);
