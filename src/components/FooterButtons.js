import React from "react";

const FooterButton = ({ name, menu }) => {
  const printItems = menu.name.map(item => <Col></Col>);

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
