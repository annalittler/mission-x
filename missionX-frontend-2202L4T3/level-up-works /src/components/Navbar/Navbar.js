import React from "react";
import "./Navbar.css";
import "./NavbarMQ.css";

import StarLogoNav from "./images/star-logo/star-logo-2x.png";
import NZFlag from "./images/nz-flag/nz-flag-x2.png";
import MaoriFlag from "./images/maori-flag/maori-flag-x2.png";
import UserIcon from "./images/icon-awesome-user-circle/icon-awesome-user-circle.png";

function Navbar() {
  return (
    <>
      <nav id="nav">
        <img src={StarLogoNav} alt="Star Logo" id="star-logo-nav" />
        <div id="links">
          <a href="//" className="nav-link">
            HOME
          </a>
          <a href="//" className="nav-link">
            FEATURES
          </a>
          <a href="//" className="nav-link">
            TEACHERS
          </a>
        </div>
        <div>
          <section id="lang-and-login">
            <div id="language-div">
              <p className="flag-div">LANG</p>
              <img src={NZFlag} alt="NZ Flag" id="nz-flag" className="flag-div" />
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
                <a href="">REGISTER</a> | <a href="">LOGIN</a>
              </span>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
