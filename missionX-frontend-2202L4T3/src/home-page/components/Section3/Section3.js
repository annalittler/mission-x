import React from "react";
import "./Section3.css";
import "./Section3MQ.css";
import Square from "./images/square/square.png";
import Animation from "./images/animation/animation-x2.png";
import Games from "./images/games/games-x2.png";
import Chatbots from "./images/chatbots/chatbots-x2.png";
import AR from "./images/ar/ar-x2.png";
import { useState } from "react";

import ImageOne from "./images/projects/project1-x2.png";
import ImageTwo from "./images/projects/project2-x2.png";
import ImageThree from "./images/projects/project3-x2.png";
import ImageFour from "./images/projects/project4-x2.png";

const images = [
  { title: "image one", img: ImageOne },
  { title: "image two", img: ImageTwo },
  { title: "image three", img: ImageThree },
  { title: "image four", img: ImageFour },
];

function Section3() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <>
      <div id="sec-3-wrapper">
        <section id="sec-3-left-side">
          <div id="sec-3-text-section">
            <h2 id="sec-3-heading" className="sec-3-text">
              What we offer
            </h2>
            <p id="sec-3-paragraph" className="sec-3-text">
              The Creative Problem Solving programme is series of digital
              creation projects aimed to encourage self-motivation and student
              agency, designed by New Zealand's leading IT industry experts and
              schools.
            </p>
          </div>
          <div id="squares-section">
            <h3 id="sec-3-squares-title">What will students create?</h3>
            <div id="squares">
              <span
                id="sec-3-square-1"
                className="sec-3-square"
                onClick={() => setCurrentPhoto(0)}
              >
                <img src={Square} alt="" id="square" />
                <img
                  src={Animation}
                  alt=""
                  srcset=""
                  className="square-overlay"
                />
                <p>ANIMATION</p>
              </span>
              <span
                id="sec-3-square-2"
                className="sec-3-square"
                onClick={() => setCurrentPhoto(1)}
              >
                <img src={Square} alt="" id="square" />
                <img src={Games} alt="" className="square-overlay" />
                <p>GAMES</p>
              </span>
              <span
                id="sec-3-square-3"
                className="sec-3-square"
                onClick={() => setCurrentPhoto(2)}
              >
                <img src={Square} alt="" id="square" />
                <img src={Chatbots} alt="" className="square-overlay" />
                <p>CHATBOTS</p>
              </span>
              <span
                id="sec-3-square-4"
                className="sec-3-square"
                onClick={() => setCurrentPhoto(3)}
              >
                <img src={Square} alt="" id="square" />
                <img src={AR} alt="" className="square-overlay" />
                <p>AUGMENTED REALITY</p>
              </span>
            </div>
          </div>
        </section>
        <section id="sec-3-right-side">
          <div id="projects-div">
            <img
              src={images[currentPhoto].img}
              alt=""
              className="projects-img"
            />
            <div id="section-3-photo-buttons">
              <span
                className={
                  currentPhoto === 0
                    ? "button-checked"
                    : "section-3-photo-button"
                }
                id="photo-button-1"
                onClick={() => setCurrentPhoto(0)}
              ></span>
              <span
                className={
                  currentPhoto === 1
                    ? "button-checked"
                    : "section-3-photo-button"
                }
                id="photo-button-2"
                onClick={() => setCurrentPhoto(1)}
              ></span>
              <span
                className={
                  currentPhoto === 2
                    ? "button-checked"
                    : "section-3-photo-button"
                }
                id="photo-button-3"
                onClick={() => setCurrentPhoto(2)}
              ></span>
              <span
                className={
                  currentPhoto === 3
                    ? "button-checked"
                    : "section-3-photo-button"
                }
                id="photo-button-4"
                onClick={() => setCurrentPhoto(3)}
              ></span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Section3;
