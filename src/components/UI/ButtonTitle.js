import React from "react";

import classes from "./ButtonTitle.module.css";

const ButtonTitle = (props) => {
  return (
    <button
      className={`${classes.title} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonTitle;
