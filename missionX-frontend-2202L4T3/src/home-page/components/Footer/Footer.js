import React from "react";
import "./Footer.css";
import "./FooterMQ.css";

function Footer() {
  return (
    <>
      <div id="footer">
        <div id="footer-col-1" className="footer-col">
          <h3 className="footer-h3">COMPANY</h3>
          <a href="//" className="footer-link">
            About
          </a>
          <a href="//" className="footer-link">
            Careers
          </a>
          <a href="//" className="footer-link">
            Partners
          </a>
        </div>
        <div id="footer-col-2" className="footer-col">
          <h3 className="footer-h3">COURSES</h3>
          <a href="//" className="footer-link">
            Register
          </a>
          <a href="//" className="footer-link">
            Login
          </a>
          <a href="//" className="footer-link">
            Projects
          </a>
          <a href="//" className="footer-link">
            Teachers
          </a>
          <a href="//" className="footer-link">
            Parents
          </a>
          <a href="//" className="footer-link">
            Resources
          </a>
        </div>
        <div id="footer-col-3" className="footer-col">
          <h3 className="footer-h3">SUPPORT</h3>
          <a href="//" className="footer-link">
            FAQs
          </a>
          <a href="//" className="footer-link">
            Helpdesk
          </a>
          <a href="//" className="footer-link">
            Contact Us
          </a>
        </div>
        <div id="footer-col-4" className="footer-col">
          <h3 className="footer-h3">LEGAL</h3>
          <a href="//" className="footer-link">
            Terms &amp; Conditions
          </a>
          <a href="//" className="footer-link">
            Privacy Policy
          </a>
        </div>
        <div id="footer-col-5" className="footer-col">
          <h3 id="footer-h3-col-5">LevelUp Works</h3>
          <p className="footer-para">
            LevelUp Works LevelUp Works is an Auckland-based enterprise
            dedicated to developing game-based learning software to help
            teachers in response to the New Zealand Digital Technologies &amp;
            Hangarau Matihiko.
            <p className="footer-para">alan@levelupworks.com</p>
            <p className="footer-para">(021) 668 185</p>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
