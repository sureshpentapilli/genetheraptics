import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/images/genelogo.jpeg";
import { ChevronDown } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [openSubItem, setOpenSubItem] = useState(null);

  const location = useLocation();

  const productGroups = {
    poultry: {
      title: "Poultry",
      items: [
        {
          name: "Veterinary Pharmaceuticals",
          subItems: [
            "VITAGENE-FORTE[250GM]",
            "THERAMIN-FORTE",
            "GENETOX-B",
            "PHYTOACT",
            "MULTIGENE",
            "LIVERSOL",
            "ACID BUFFER",
            "CAL-D-GENE",
            "ELECTROGENE",
            "GENVIT-D3",
            "IMMUN PRO",
            "LACTOGENE PLUS",
            "GUT DAM",
            "DIGENE",
            "AMINO BOOST",
            "LYSINE-G",
            "METHIOGENE",
            "L-THRIONINE"
          ],
        },
        {
          name: "ANTIBIOTIC FEED SUPPLEMENTS",
          subItems: [
            "CTC - 15%",
            "TYLODEX",
            "TIAMULIN-10%",
            "OXY TETRACYCLINE[OTC]",
            "BMD",
            "GEN-TRIM-FS",
            "FURAGEN-20%",
            "TIAMULIN-80%"
          ],
        },
        {
          name: "LIQUID FEED SUPPLEMENTS",
          subItems: [
            "VITASOL-AD3EC-LIQ",
            "THERAMIN-LIQ",
            "GENE-TOX-LIQ",
            "LIVERSOL-LIQ",
            "ACID BUFFER-LIQ",
            "CAL-D-GENE-LIQ",
            "GROW WIN-LIQ",
            "GENE PRO-LIQ",
            "GROW WIN-PLUS-LIQ"
          ],
        },
      ],
    },
    largeAnimal: {
      title: "Large Animal",
      items: [
        {
          name: "Veterinary Pharmaceuticals",
          subItems: [
            "Pain Relievers",
            "Anthelmintics",
            "Hormones"
          ],
        },
        {
          name: "Feed Supplements, Feed Additives, Premixtures",
          subItems: [
            "Energy Boosters",
            "Protein Supplements"
          ],
        },
        {
          name: "Biosecurity",
          subItems: [
            "Vaccination Programs",
            "Preventive Care"
          ],
        },
        {
          name: "Topical Formulation",
          subItems: [
            "Antiseptic Creams",
            "Skin Ointments"
          ],
        },
      ],
    },
    aquaculture: {
      title: "Aquaculture",
      items: [
        {
          name: "Veterinary Pharmaceuticals",
          subItems: [
            "Water Treatment",
            "Antibiotics"
          ],
        },
        {
          name: "Feed Supplements, Feed Additives, Premixtures",
          subItems: [
            "Growth Enhancers",
            "Immunity Boosters"
          ],
        },
        {
          name: "Biosecurity",
          subItems: [
            "Water Disinfection",
            "Hygiene Products"
          ],
        },
      ],
    },
  };
  

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActive("home");
    } else if (currentPath === "/about") {
      setActive("about");
    } else if (currentPath.includes("product-groups")) {
      setActive("product-groups");
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
                  to="/product-groups"
                  className={`nav-link ${
                    active === "product-groups" ? "active-link" : ""
                  }`}
                >
                  PRODUCT GROUPS
                  <ChevronDown className="ms-1" size={16} />
                </Link>
              </li>

              {isOpen && (
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
                    {Object.values(productGroups).map((group) => (
                      <div key={group.title} className="col-4">
                        <h3 className="fw-bold text-primary mb-3">
                          {group.title}
                        </h3>
                        <ul className="list-unstyled">
                          {group.items.map((item) => (
                            <li key={item.name} className="mb-2">
                              <div
                                className="d-flex align-items-center justify-content-between"
                                onClick={() => toggleSubItems(item.name)}
                                style={{ cursor: "pointer" }}
                              >
                                <strong className="text-dark">
                                  {item.name}
                                </strong>
                                <ChevronDown
                                  size={16}
                                  className={`ms-2 ${
                                    openSubItem === item.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </div>

                              {openSubItem === item.name && (
                                <ul className="list-unstyled ms-3">
                                  {item.subItems.map((subItem) => (
                                    <li
                                      key={subItem}
                                      className="text-muted small"
                                    >
                                      <a
                                        href="#"
                                        className="text-dark text-decoration-none"
                                      >
                                        {subItem}
                                      </a>
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
