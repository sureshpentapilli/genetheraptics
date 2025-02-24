import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/images/genelogo.jpeg";
import { ChevronDown } from "lucide-react";
import { cardsData } from "../../data/data";

import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [openSubItem, setOpenSubItem] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActive("home");
    } else if (currentPath === "/about") {
      setActive("about");
    } else if (currentPath.includes("#")) {
      setActive("#");
    } else if (currentPath.includes("key-conditions")) {
      setActive("key-conditions");
    } else if (currentPath.includes("gallery")) {
      setActive("gallery");
    } else if (currentPath.includes("contact")) {
      setActive("contact");
    }
  }, [location]);

  const toggleSubItems = (itemName) => {
    setOpenSubItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="logo-animation"
          />
          <span className="brand-name">GENE THERAPEUTICS</span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${active === "home" ? "active-link" : ""}`}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  active === "about" ? "active-link" : ""
                }`}
              >
                ABOUT
              </Link>
            </li>

            {/* Product Groups Dropdown */}
            <div
              className="nav-item dropdown"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <li className="nav-item">
                <Link
                  to="#"
                  className={`nav-link ${
                    active === "product-groups" ? "active-link" : ""
                  }`}
                >
                  PRODUCT GROUPS
                  <ChevronDown className="ms-1" size={16} />
                </Link>
              </li>

              {isOpen && cardsData?.length > 0 && (
                <div
                  className="dropdown-menu mega-menu show p-4"
                  style={{
                    width: "900px",
                    left: "30%",
                    transform: "translateX(-50%)",
                    maxHeight: "calc(100vh - 80px)",
                    overflowY: "auto",
                  }}
                >
                  <div className="row">
                    {cardsData.map((group, ind) => (
                      <div key={group.id} className="col-4">
                        <Link
                          to={`/category/${group.id}/${ind + 101}`}
                          className="fw-bold text-primary text-decoration-none"
                        >
                          <h3>{group.title}</h3>
                        </Link>
                        <ul className="list-unstyled">
                          {group.subitems.map((item, i) => (
                            <li key={item.id} className="mb-2">
                              <div className="d-flex align-items-center justify-content-between">
                                <Link
                                  to={`/category/${group.id}/${i + 101}`}
                                  className="text-dark text-decoration-none fw-bold"
                                >
                                  {item.title}
                                </Link>
                                <ChevronDown
                                  size={16}
                                  className={`ms-2 ${
                                    openSubItem === item.title ? "rotate" : ""
                                  }`}
                                  onClick={() => toggleSubItems(item.title)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                              {/* Show Subcategory Items */}
                              {openSubItem === item.title &&
                                item.items?.length > 0 && (
                                  <ul className="list-unstyled ps-3">
                                    {item.items.map((sub, index) => (
                                      <li key={index}>
                                        <Link
                                          to={`/subcategory/${ind + 101}/${
                                            sub.id
                                          }`}
                                          className="text-dark"
                                        >
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <li className="nav-item">
              <Link
                to="/key-conditions"
                className={`nav-link ${
                  active === "key-conditions" ? "active-link" : ""
                }`}
              >
                KEY CONDITIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className={`nav-link ${
                  active === "gallery" ? "active-link" : ""
                }`}
              >
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${
                  active === "contact" ? "active-link" : ""
                }`}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
