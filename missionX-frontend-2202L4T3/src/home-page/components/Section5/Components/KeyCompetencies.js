import React from "react";
import Star from "../images/star-only-x2.png";
import "./Subcomponents.css";
import "./SubcomponentsMQ.css";

export default function KeyCompetencies() {
  return (
    <div id="sub-section">
      <h2 className="sub-h2">Enhance key competencies</h2>
      <h3 className="sub-h3">
        The programme enhances capabilities of students in the 5 Key
        Competencies identified in the New Zealand Curriculum:
      </h3>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">THINKING</p>
          <p className="sub-p">
            In particular the programme focused on problem solving, design
            thinking and computational thinking.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">DISCERNING CODES</p>
          <p className="sub-p">
            Analysing language, symbols, and texts in order to understand and
            make sense of the codes in which knowledge is expressed.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">SELF-MANAGEMENT</p>
          <p className="sub-p">
            Projects and challenges are designed to motivate students to explore
            and experiment with self-motivation.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div className="sub-inner">
          <p className="sub-p">RELATIONSHIPS WITH PEERS</p>
          <p className="sub-p">
            The programme is designed with unplugged sessions where students
            interact in a range of different situations, including things like
            being able to listen well, recognise different points of view, and
            share ideas.
          </p>
        </div>
      </div>
      <div className="sub-list-item">
        <img src={Star} alt="" className="sub-star" />
        <div>
          <p className="sub-p">PARTICIPATION AND COLLABORATION</p>
          <p className="sub-p">
            The programme encourages students to be involved in communities,
            such as family, whānau, school, and contribute and make connections
            with other people
          </p>
        </div>
      </div>
    </div>
  );
}
