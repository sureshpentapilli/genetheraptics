import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import ProductGroupPage from "./pages/ProductGroups/ProductGroupPage";
import SubItemPage from "./pages/ProductGroups/SubItemPage";
import ProductPage from "./pages/ProductGroups/ProductPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/productpage" element={<ProductPage />} />

          
          {/* Dynamic category path */}
          <Route path="/:category/:categoryName" element={<ProductGroupPage />} />
          <Route path="/:category/:categoryName/:subItemName" element={<SubItemPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
