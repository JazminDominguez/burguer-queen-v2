import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from "../actions/index.js"


class ConnectedList extends React.Component {
    render(){
        return(
            <div>
           <p>menu:</p>
           <button onClick={this.props.fetchBreakfast}>Desayuno</button>
           <button onClick={this.props.fetchMeal}>Comida</button>
           </div>
        )
    }
}


const mapStateToProps = state => {
    return state
};


const List = connect(mapStateToProps, actionCreators)(ConnectedList);

export default List