import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Pages/Herosection";
import Herosection from "./Pages/Herosection";
import AboutUs from "./Pages/About";
import ContactUs from "./Pages/Contact";
import Section1 from "./Pages/Section1";
import Unit from "./Pages/Unit";
import Section2 from "./Pages/Section2";
import Section3 from "./Pages/Section3";
import Gallery from "./Pages/Gallery";
import Footer from "./Pages/Footer";

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