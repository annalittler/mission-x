import React from "react";
import Star from "../images/star-only-x2.png";
import "./Subcomponents.css";
import "./SubcomponentsMQ.css";

export default function LearningPathways() {
  return (
    <div id="sub-section">
      <h2 className="sub-h2">Interlinking Pathways</h2>
      <h3 className="sub-h3">
        This programme gives us 5 important interlinking Learning Pathways.
      </h3>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">COMPUTATIONAL THINKING</p>
          <p className="sub-p">
            Within the programme the students are enabled to express problems
            and form solutions that will be designed so a computer can be used
            to create diverse and encapsulating applications.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">DEVELOPING DIGITAL OUTCOMES </p>
          <p className="sub-p">
            This programme is designed to strengthen the outcomes of each
            students personally to form strong applications.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">DESIGNING PROCESSED OUTCOMES </p>
          <p className="sub-p">
            Students will be taught the ways of how outcomes are processed,
            thought about, and produced.{" "}
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">DEVELOP VISUAL AND SOCIAL COMMUNICATIONS </p>
          <p className="sub-p">
            Students will learn to design visually pleasing applications used to
            both keep the user aware of what is happening on the screen.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div>
          <p className="sub-p">STRONG TECHNOLOGICAL PRACTICES </p>
          <p className="sub-p">
            The programme will show students the best practices to think and
            solve the problems brought on by using technology.
          </p>
        </div>
      </div>
    </div>
  );
}
