import React from "react";
import Navbar from "../Navbar/Navabar";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

const images = [
  "images/company.jpeg",
  "images/fish.jpg",
  "images/gallerybanner.jpeg",
  "images/gallerybanner1.jpg",
  "images/company.jpeg",
  "images/fish.jpg",
  "images/gallerybanner.jpeg",
  "images/gallerybanner1.jpg",
];

const Gallery = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="gallery-banner d-flex align-items-center justify-content-center text-white">
        <h1 className="line card-title performance">
          <span className="how-we" style={{ fontWeight: "bold" }}>
            Gallery
          </span>
        </h1>
      </section>

      {/* Image Gallery Section */}
      <div className="gap-all" style={{ padding: "50px 20px" }}>
        <div className="container">
          <div className="row g-4">
            {images.map((img, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="gallery-img">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
