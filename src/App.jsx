import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Herosection";
import Herosection from "./Components/Herosection";
import About from "./Components/About";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/about" element={<About />} />
        <Route path="/units" element={<Section1 />} />
        <Route path="/sermons" element={<Section2 />} />
        <Route path="/events" element={<Section3 />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;