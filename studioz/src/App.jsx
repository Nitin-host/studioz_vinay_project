import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Commerical from "./pages/Commercial";
import Residential from "./pages/Residential";
import Footer from "./component/Footer";


export default function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commercial" element={<Commerical />} />
          <Route path="/residential" element={<Residential />} />
        </Routes>
      <Footer/>
    </>
  );
}
