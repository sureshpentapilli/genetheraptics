import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ProductContent from "../../components/ProductContent";
import { Container, Row, Col } from "react-bootstrap";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  return (
    <Container fluid>
      <Row>
        {/* Sidebar remains visible */}
        <Col md={3}>
          <Sidebar 
            onSelectCategory={setSelectedCategory} 
            onSelectSubItem={setSelectedSubItem}
          />
        </Col>

        {/* Product content updates based on selected sub-item */}
        <Col md={9}>
          <ProductContent 
            selectedCategory={selectedCategory} 
            selectedSubItem={selectedSubItem} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
