import React from "react";
import Star from "../images/star-only-x2.png";
import "../Components/Subcomponents.css";

export default function IR40() {
  return (
    <div id="sub-section">
      <h2 className="sub-h2">IR4.0</h2>
      <h3 className="sub-h3">
        Designed with IT industry experts, the programme develops the students
        to find applicable jobs and careers in the Fourth Industrial Revolution.
        (IR4.0)
      </h3>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">LEARNING TO LEARN</p>
          <p className="sub-p">
            The programme will set challenges at the end of every project to
            encourage students to explore and learn how to learn.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">COMMUNITY ENGAGEMENT</p>
          <p className="sub-p">
            The programme encourages students to be involved in the communities,
            such as family, friends, and in school, to contribute and make
            connections with other people.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">CULTURAL DIVERSITY</p>
          <p className="sub-p">
            This programme is designed in New Zealand and reflects NZ's cultural
            diversity.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">INCLUSION</p>
          <p className="sub-p">
            In particular the programme is designed with acknowledgement to the
            student's identities and talents, allowing them to be creative to
            their personal ability.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div>
          <p className="sub-p">FUTURE FOCUS</p>
          <p className="sub-p">
            The programme leads students to explore future themes such as
            artificial intelligence and augmented reality.
          </p>
        </div>
      </div>
    </div>
  );
}
