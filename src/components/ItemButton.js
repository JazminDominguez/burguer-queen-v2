import React from "react";
import { Image } from "react-bootstrap";

const ItemButton = ({ icon, itemName, color }) => {
  return (
    <div
      className={`item-button-container ${color}`}
      onClick={() => {
        console.log({ color });
      }}
    >
      <p>{itemName}</p>
    </div>
  );
};

export default ItemButton;
