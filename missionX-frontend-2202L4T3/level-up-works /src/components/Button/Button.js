import React from "react";
import "./Button.css";

function Button({ value, variant, onClick }) {
  return (
    <>
      <button className="btn-comp" style={variant} onClick={onClick}>
        {value}
      </button>
    </>
  );
}

export default Button;
