import React from "react";
import { useParams } from "react-router-dom";

const ProductGroupPage = () => {
  const { category, categoryName } = useParams();

  return (
    <div>
      <h2>{category} - {decodeURIComponent(categoryName)}</h2>
      <p>Show details about {decodeURIComponent(categoryName)} in {category}.</p>
    </div>
  );
};

export default ProductGroupPage;
