import React from "react";
import "./Button.css";


function Button({ className, value, variant, onClick }) {
  return (
    <>
      <button className={className} style={variant} onClick={onClick}>
        {value}
      </button>
    </>
  );
}

export default Button;
