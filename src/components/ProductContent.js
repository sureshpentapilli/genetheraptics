import React from "react";

const ProductContent = ({ selectedCategory, selectedSubItem }) => {
  return (
    <div>
      <h2>{selectedCategory || "Select a Category"}</h2>
      <h3>{selectedSubItem ? `Showing details for: ${selectedSubItem}` : "Select a SubItem"}</h3>
    </div>
  );
};

export default ProductContent;
