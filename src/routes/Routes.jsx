import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Slider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routes;
