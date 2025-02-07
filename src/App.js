import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <Router>
      <div>
        

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;
