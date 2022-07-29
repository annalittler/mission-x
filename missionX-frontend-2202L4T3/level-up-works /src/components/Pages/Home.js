import React from 'react'
import Navbar from "../Navbar/Navbar";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import Section6 from "../Section6/Section6";
import Footer from "../Footer/Footer";

// This component has been CHANGED FROM RAY BRANCH 
import LoginSignup from "../LoginSignup/LoginSignup";


export default function Home() {
  return (
    <div>
      <Navbar />
      <LoginSignup />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}
