import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgressCheckerCollapse from "./components/ProgressCheckerCollapse";

//import RightSection from "./components/RightSection";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./css/MainPage.css";

export default function MainPage() {
  return (
    <div>
      <Navbar />
     
     <ProgressCheckerCollapse/>
     
      <Footer />
    </div>
  );
}