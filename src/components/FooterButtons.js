import React from "react";

const FooterButton = ({ name, menu }) => {
  return (
    <div
      className={`footer-button ${name}`}
      onClick={() => {
        console.log({ name });
      }}
    >
      <p>{name}</p>
    </div>
  );
};

export default FooterButton;
