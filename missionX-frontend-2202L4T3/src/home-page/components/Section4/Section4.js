import React from "react";
import "./Section4.css";
import "./Section4MQ.css";
import sec4img1 from "./images/sec4img1/sec4img1.png";
import sec4img2 from "./images/sec4img2/sec4img2.png";
import sec4img3 from "./images/sec4img3/sec4img3.png";
import sec4img4 from "./images/sec4img4/sec4img4.png";

function Section4() {
  return (
    <>
      <div id="sec-4-wrapper">
        <h3 id="sec-4-text">
          Teaching kids programming and digital skills is <i>MORE</i> than just
          writing code.
        </h3>
        <div id="sec-4-images">
          <img src={sec4img1} alt="" className="sec-4-image" />
          <img src={sec4img2} alt="" className="sec-4-image" />
          <img src={sec4img3} alt="" className="sec-4-image" />
          <img src={sec4img4} alt="" className="sec-4-image" />
        </div>
      </div>
    </>
  );
}

export default Section4;
