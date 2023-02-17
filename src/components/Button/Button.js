import React from "react";

const Button = ({ children, classCss }) => {
  return <button className={`btn ${classCss}`}>{children}</button>;
};

export default Button;
