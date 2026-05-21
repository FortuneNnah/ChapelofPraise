import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Herosection";
import Herosection from "./Components/Herosection";
import AboutUs from "./Components/About";
import ContactUs from "./Components/Contact";
import Section1 from "./Components/Section1";
import Unit from "./Components/Unit";
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
        <Route path="/About" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/units" element={<Unit />} />
        <Route path="/sermons" element={<Section2 />} />
        <Route path="/events" element={<Section3 />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;