import React from "react";

const Button = (props) => {
  return <button onClick={props.handleChange}>{props.children}</button>;
};

export default Button;
