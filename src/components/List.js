import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { menu: state.menu};
}

const ConnectedList = ({ menu }) => (
    <ul>
        {menu.map(el=> (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
)

const List = connect(mapStateToProps)(ConnectedList);

export default List;