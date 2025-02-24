import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import CategoryPage from "./pages/categeory/CategoryPage"
import SubcategoryPage from "./pages/categeory/SubcategoryPage"


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* <Route path="/category/:id" element={<CategoryPage />} /> */}
          <Route path="/category/:subcategory/:id" element={<CategoryPage />} />
          <Route path="/subcategory/:id/:itemId" element={<SubcategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
