import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import Quality from "./pages/Quality";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}