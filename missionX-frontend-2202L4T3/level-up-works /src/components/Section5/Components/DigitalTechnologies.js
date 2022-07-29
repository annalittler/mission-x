import React from "react";
import Star from "../images/star-only-x2.png";
import "../Components/Subcomponents.css";

export default function DigitalTechnologies() {
  return (
    <div id="sub-section-body">
      <div id="sub-section">
        <h2 className="sub-h2">Expands Digital Knowledge Base</h2>
        <h3 className="sub-h3">
          This programme gives you the 5 major capabilities to be confident in
          Digital Technologies.
        </h3>
        <div className="sub-list-item">
          <img src={Star} alt="" className="sub-star" />
          <div className="sub-inner">
            <p className="sub-p">PROBLEM SOLVING</p>
            <p className="sub-p">
              The programme challenges are designed to think around multiple
              issues and challenges the way students interact with computers and
              other related technology.
            </p>
          </div>
        </div>
        <div className="sub-list-item">
          <img src={Star} alt="" className="sub-star" />
          <div className="sub-inner">
            <p className="sub-p">DECISION-MAKING</p>
            <p className="sub-p">
              The programme uses technology to make the lives of many people
              happier through the decisions made when creating digital
              applications.
            </p>
          </div>
        </div>
        <div className="sub-list-item">
          <img src={Star} alt="" className="sub-star" />
          <div className="sub-inner">
            <p className="sub-p">CONFIDENCE</p>
            <p className="sub-p">
              When having the skills to manipulate the applications and learning
              to use it brings self-confidence into your life.
            </p>
          </div>
        </div>
        <div className="sub-list-item">
          <img src={Star} alt="" className="sub-star" />
          <div className="sub-inner">
            <p className="sub-p">HIGHER SELF-EXPECTATIONS</p>
            <p className="sub-p">
              This programme develops students to think the best of themselves
              to bring higher expectations to their learning and lives as young
              adults.
            </p>
          </div>
        </div>
        <div className="sub-list-item">
          <img src={Star} alt="" className="sub-star" />
          <div>
            <p className="sub-p">COHERENCE</p>
            <p className="sub-p">
              This programme offers all students a broader education that makes
              links within and across learning areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
