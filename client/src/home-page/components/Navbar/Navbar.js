import React from "react";
import "./Navbar.css";
import "./NavbarMQ.css";

import StarLogoNav from "./images/star-logo/star-logo-2x.png";
import NZFlag from "./images/nz-flag/nz-flag-x2.png";
import MaoriFlag from "./images/maori-flag/maori-flag-x2.png";
import UserIcon from "./images/icon-awesome-user-circle/icon-awesome-user-circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Navbar({ setModalState, setStudentOrTeacherModal, width }) {
  const [showAltNav, setShowAltNav] = useState(false);

  return (
    <>
      <nav id="nav-wrapper">
        <div id="nav">
          <span id="star-logo-span">
            <img src={StarLogoNav} alt="Star Logo" id="star-logo-nav" />
          </span>
          <div id="links">
            <a href="//" className="nav-link nav-to-hide">
              HOME
            </a>
            <a href="//" className="nav-link nav-to-hide">
              FEATURES
            </a>
            <a href="//" className="nav-link nav-to-hide">
              TEACHERS
            </a>
            <div id="nav-hamburger">
              {showAltNav === false && (
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={() => setShowAltNav(!showAltNav)}
                />
              )}
              {showAltNav === true && (
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setShowAltNav(!showAltNav)}
                />
              )}
            </div>
          </div>
          <div id="lang-login-div">
            <section id="lang-and-login">
              <div id="language-div">
                <p className="flag-div">LANG</p>
                <img
                  src={NZFlag}
                  alt="NZ Flag"
                  id="nz-flag"
                  className="flag-div"
                />
                <img
                  src={MaoriFlag}
                  alt="Maori Flag"
                  id="maori-flag"
                  className="flag-div"
                />
              </div>

              <div id="login-div">
                <img src={UserIcon} alt="User Icon" id="user-icon" />
                <span className="nav-link">
                  <a
                    href="//"
                    onClick={(e) => {
                      e.preventDefault();
                      if (width > 950) {
                        setModalState("show");
                      } else {
                        setStudentOrTeacherModal("show");
                      }
                    }}
                  >
                    REGISTER{" "}
                  </a>
                  |
                  <a
                    href="//"
                    onClick={(e) => {
                      e.preventDefault();
                      if (width > 950) {
                        setModalState("show");
                      } else {
                        setStudentOrTeacherModal("show");
                      }
                    }}
                  >
                    {" "}
                    LOGIN
                  </a>
                </span>
              </div>
            </section>
          </div>
        </div>
      </nav>
      <nav
        className={
          showAltNav === false ? "nav-alt hidden" : "nav-alt not-hidden"
        }
      >
        <a href="//" className={showAltNav === false ? "" : ""}>
          HOME
        </a>
        <a href="//" className={showAltNav === false ? "" : ""}>
          FEATURES
        </a>
        <a href="//" className={showAltNav === false ? "" : ""}>
          TEACHERS
        </a>
      </nav>
    </>
  );
}

export default Navbar;
