import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home-page/Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
