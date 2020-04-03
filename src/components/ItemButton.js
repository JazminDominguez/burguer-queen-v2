import React from "react";
import { Image } from "react-bootstrap";

const ItemButton = ({ icon, itemName, color, itemPrice, addItems }) => {
  return (
    <button
      id={itemName}
      value={itemPrice}
      className={`item-button-container ${color}`}
      onClick={addItems}
    >
      <Image style={{ pointerEvents: "none" }} src={icon} />
      <p style={{ pointerEvents: "none" }}>{itemName}</p>
    </button>
  );
};

export default ItemButton;

/*
      onClick={(e) => {
        console.log(e.target.id);
      } }
*/
