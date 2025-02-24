import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { cardsData } from "../../data/data";
import { itemsData } from "../../data/itemsData";
import Navbar from "../Navbar/Navabar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import "./CategoryPage.css";

function CategoryPage() {
  let { subcategory, id } = useParams();
  console.log("idravi,,,,,,", id);
  const navigate = useNavigate();
  const category = cardsData.find(
    (group) => group.id.toString() === subcategory
  );

  const [selectedItems, setSelectedItems] = useState([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState({});
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);

  // if (!category) return <h2>Category not found</h2>;

  const toggleSubcategory = (item) => {
    console.log("item.....",item)
    setSelectedItems(itemsData[item.id] || []);
    setSelectedSubcategoryId(item.id);
    navigate(`/category/${subcategory}/${item.id}`);
  };
  

  const navigateToSubcategory = (subItem) => {
    console.log("subitem........", subItem);
    navigate(`/subcategory/${subcategory}/${subItem.id}`, { state: subItem });
  };
  
  

  const toggleExpand = (itemId) => {
    setExpandedSubcategories((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  useEffect(() => {
    if (id && itemsData[id]) {
      setSelectedItems(itemsData[id]);
      setSelectedSubcategoryId(id);
    }
  }, [id]);
  

  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      <section class="banner-section">
        <div class="banner-text">
          <h1>POULTRY</h1>
          {/* <p>Explore the best products and services.</p> */}
        </div>
        <div class="banner-container">
          <div class="banner-overlay"></div>
          <img
            src="/images/poultrybanner1.jpg"
            alt="Banner Image"
            class="banner-image"
          />
        </div>
      </section>

      <section style={{ padding: "50px 0px" }}>
        <div className="container">
          <h2 className="fw-bold text-primary">{category.title}</h2>
          <p>{category.description}</p>
          <div className="row">
            {/* Left Column - Subcategories */}
            <div className="col-md-3">
              <div
                className="position-sticky p-3 bg-light rounded shadow-sm"
                style={{ top: "20px" }}
              >
                {/* <h4 className="fw-bold text-primary mb-3">Subcategories</h4> */}
                <ul className="list-unstyled">
                  {category.subitems.map((item) => {
                    console.log("item..1.", typeof item.id);
                    console.log(
                      "selectedSubcategoryId...",
                      typeof selectedSubcategoryId
                    );

                    return (
                      <li key={item.id} className="mb-2">
                        <div
                          className={`subcategory-item ${
                            +selectedSubcategoryId === item.id ? "active" : ""
                          }`}
                          onClick={() => toggleExpand(item.id)}
                        >
                          <span
                            className="fw-semibold"
                            onClick={() => toggleSubcategory(item)}
                          >
                            {item.title}
                          </span>

                          <motion.span
                            animate={{
                              rotate: expandedSubcategories[item.id] ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {expandedSubcategories[item.id] ? (
                              <FaChevronUp className="ms-2" />
                            ) : (
                              <FaChevronDown className="ms-2" />
                            )}
                          </motion.span>
                        </div>

                        {/* Animated Dropdown for Sub-items */}
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: expandedSubcategories[item.id] ? "auto" : 0,
                            opacity: expandedSubcategories[item.id] ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-2 ms-3 list-unstyled overflow-hidden"
                        >
                          {item.items.length > 0 ? (
                            item.items.map((subItem, index) => (
                              <li
                                key={index}
                                className="text-secondary px-2 py-1 rounded hover:bg-light"
                                onClick={() =>
                                  navigateToSubcategory(subItem, subItem.id)
                                }
                                style={{
                                  cursor: "pointer",
                                  transition: "0.3s",
                                }}
                              >
                                {subItem.name || subItem}
                              </li>
                            ))
                          ) : (
                            <li className="text-muted px-2">
                              No items available
                            </li>
                          )}
                        </motion.ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right Column - Display Selected Subcategory Items */}
            <div className="col-md-9">
              <h4>
                {selectedSubcategoryId
                  ? category.subitems.find(
                      (item) => item.id === selectedSubcategoryId
                    )?.title
                  : "Selected Subcategory Items"}
              </h4>

              {selectedItems.length > 0 ? (
                <div className="row g-4">
                  {" "}
                  {/* Add g-4 for better spacing */}
                  {selectedItems.map((subItem, index) => (
                    <div
                      key={index}
                      className="col-lg-4 col-md-6 col-sm-12 d-flex"
                    >
                      <div
                        className="card w-100 card-container"
                        onClick={() => navigateToSubcategory(subItem, index)}
                      >
                        {/* Image */}
                        <img
                          src={subItem.img}
                          className="card-img-top"
                          alt={subItem.name}
                        />

                        {/* Title Below Image */}
                        <div className="card-body text-center">
                          <h6 className="card-title">{subItem.name}</h6>
                        </div>

                        {/* Hover Effect (Description Appears) */}
                        <div className="card-hover-body">
                          <p className="card-text">{subItem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">
                  Select a subcategory to view details.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default CategoryPage;
