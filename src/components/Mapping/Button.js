import React from "react";

export const Button = (props) => {
  return (
    <button className={props.myclass} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};
