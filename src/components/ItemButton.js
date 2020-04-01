import React from "react";
import { Image } from "react-bootstrap";

const ItemButton = ({ icon, itemName }) => {
  return (
    <div className="item-button-container">
      <p>{itemName}</p>
    </div>
  );
};

export default ItemButton;
