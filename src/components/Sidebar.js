import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import productData from "../data/products.json";

const Sidebar = ({ selectedCategory, onSelectSubItem }) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  return (
    <ListGroup>
      {productData.categories.map((category, index) => (
        <div key={index}>
          {/* Category Highlight */}
          <ListGroup.Item 
            action 
            active={category.name === selectedCategory}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </ListGroup.Item>

          {/* Show SubItems when category is active */}
          {activeCategory === category.name && (
            <ListGroup>
              {category.items.map((item, subIndex) => (
                <ListGroup.Item 
                  key={subIndex} 
                  action 
                  style={{ paddingLeft: "20px" }} 
                  onClick={() => onSelectSubItem(item.name)}
                >
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
      ))}
    </ListGroup>
  );
};

export default Sidebar;
