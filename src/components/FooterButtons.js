import React from "react";

const FooterButton = ({ name }) => {
  return (
    <div className={`footer-button ${name}`}>
      <p>{name}</p>
    </div>
  );
};

export default FooterButton;
