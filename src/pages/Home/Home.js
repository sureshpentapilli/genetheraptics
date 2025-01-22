import React from "react";
import Navbar from "../Navbar/Navabar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import "animate.css"; // Ensure Animate.css is imported
import poultry from "../../assets/videos/poultry.mp4";
import animal from "../../assets/videos/animal.mp4";
import aqua from "../../assets/videos/aqua2.mp4";
import hen from "../../assets/images/hen.jpg";
import aquaimage from "../../assets/images/aqua.jpg";
import gmp from "../../assets/images/gmp2.png";
import cowimage from "../../assets/images/cow.jpg";
import iso from "../../assets/images/iso.png";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  const whatsappNumber = "8187896699"; // Replace with your number in international format
  const preDefinedMessage = "Hello! welcome to Genetheraptics pharma pvt.ltd.";

  return (
    <>
      <Navbar />
      {/* section 1 start */}
      <section>
        <div className="">
          {/* Bootstrap Carousel */}
          <div
            id="videoCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#videoCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#videoCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#videoCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="video-gradient-wrapper">
                  <video className="d-block w-100" autoPlay loop muted>
                    <source src={poultry} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="carousel-caption custom-carousel-caption col-md-12">
                  <h5 className="poultry-name">
                    P<span className="egg-o">o</span>ultry
                  </h5>
                  <p className="animate__animated animate__backInLeft animate__slow" style={{fontFamily:"italic"}}>
                    Improving human health through animal health
                  </p>
                  <a
                    href="#learn-more-1"
                    className="btn btn-primary animate__animated animate__fadeIn"
                  >
                    Explore Poultry Group
                  </a>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="video-gradient-wrapper">
                  <video className="d-block w-100" autoPlay loop muted>
                    <source src={animal} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="carousel-caption custom-carousel-caption">
                  <h5 className="animal-health-name">
                    <span className="unique-a">A</span>nimal Health
                  </h5>
                  <p className="animate__animated animate__backInLeft animate__slow"style={{fontFamily:"italic"}}>
                    Ensuring animal well-being for a better future
                  </p>
                  <a
                    href="#learn-more-2"
                    className="btn btn-primary animate__animated animate__fadeIn"
                  >
                    Discover Animal Care
                  </a>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="video-gradient-wrapper">
                  <video className="d-block w-100" autoPlay loop muted>
                    <source src={aqua} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="carousel-caption custom-carousel-caption">
                  <h5 className="aquaculture-name">
                    A<span className="aqua-q">Q</span>uaculture
                  </h5>
                  <p className="animate__animated animate__backInLeft animate__slow" style={{fontFamily:"italic"}}>
                    Supporting sustainable water-based farming
                  </p>
                  <a
                    href="#learn-more-3"
                    className="btn btn-primary animate__animated animate__fadeIn"
                  >
                    Learn About Aquaculture
                  </a>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* section 1 closed */}

      {/* section 2 start */}
      <section className="gap-all">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h2 className="who-we">
                  <span>Who we are?</span>
                </h2>
                <p className="animate__animated animate__backInLeft  animate__slow who-we-paragraph">
                  <span className="gene-text">Gene Therapeutics</span> is a
                  leading manufacturer of wide range of animal health and
                  aquaculture products. Neospark is a technology-based
                  enterprise, where tradition mixes well with courageous
                  entrepreneurship. Neospark is committed to uphold health and
                  productivity in livestock, poultry and aquaculture. At
                  Neospark, emphasis is in research, development, manufacture
                  and marketing of innovative value-added products and services
                  of highest quality. Neospark researches, develops,
                  manufactures and markets a specialized product package for
                  both Animal Health and Aquaculture; in particular Drug
                  Formulations, Feed Supplements, Premixes, Biotechnology
                  Formulations, Toxin binders and Toxin control products, and
                  wide range of Biosecurity Formulations.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a
                    href="#learn-more-1"
                    className="btn btn-primary animate__animated animate__fadeIn"
                  >
                    know more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 end */}

      {/* section 3 start */}
      <section className="gap-all">
        <div className="allcards">
          <div className="container main-card">
            <div className="card">
              <div className="image">
                <img src={hen} alt="Design" />
              </div>
              <div className="content">
                <h3>Poultry</h3>
                <p>
                  The history of poultry development in india is a success story
                  par excellence
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={cowimage} alt="Code" />
              </div>
              <div className="content">
                <h3>Large Animal</h3>
                <p>
                  Advances in animal husbandry have touched and transformed the
                  lives of the largest number of people.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={aquaimage} alt="Launch" />
              </div>
              <div className="content">
                <h3>Aquaculture</h3>
                <p>
                  Aquaculture is concerned with the propagation and rearing of
                  aquatic organisms
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 end */}

      {/* section 4 start */}
      <section className="gap-all">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h2 className="who-we">
                  <span>12+ Years of Success</span>
                </h2>
              </div>
              <div>
                <p className="who-we-paragraph">
                  It started with Four men who had a dream. From the moment{" "}
                  <span className="gene-text">Gene Therapeutics</span> was born
                  on 2012, ingenuity has been a driving force behind our
                  success.
                </p>
              </div>
              <div className="col-md-6">
                <p className="who-we-paragraph">
                  <span className="gene-text">Gene Therapeutics</span> grew up
                  with a strong heritage as a research-based company. Neospark
                  travels with updated knowledge as the future is becoming
                  increasingly research driven to meet the needs of healthcare
                  of livestock and aquaculture industry. Neospark recognizes the
                  reality of the fast changing world of today, the challenges it
                  faces and with a staunch belief that the only guarantee of
                  success is to offer Value through Innovation coupled high
                  quality products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 end */}

      {/* section 5 start */}

      <h4 className="certificates who-we"><span>Certifications on Quality Management System</span></h4>

      <section className="bg-image">
        <div className="container">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-6">
              <div className="infocardContainer">
                <div id="main">
                  <img src={gmp} alt="Profile"></img>
                </div>
                <div id="textbois">
                  {/* <h2>Emil Alicic</h2> */}
                  <h6>GMP+ International is the authority</h6>
                  <a href="#" className="Readmore-btn" style={{ display: "flex", justifyContent: "center" }}>Readmore</a>
                
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6">
              <div className="infocardContainer">
                <div id="main">
                  <img src={iso} alt="Profile"></img>
                </div>
                <div id="textbois">
                  {/* <h2>Emil Alicic</h2> */}
                  <h6>ISO International is the authority</h6>
                  <a href="#" style={{ display: "flex", justifyContent: "center" }} className="Readmore-btn">Read more</a>
                 
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="col-md-12"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <div className="infocardContainer info-co">
                <div id="main">
                  <img src={iso} alt="Profile"></img>
                </div>
                <div id="textbois">
                  {/* <h2>Emil Alicic</h2> */}
                  <h6>ISO International is the authority</h6>
                  <a href="#" style={{ display: "flex", justifyContent: "center" }} className="Readmore-btn">Readmore</a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 end */}

      {/* section 6 start */}

      {/* section whatsapp */}
      <section className="whatsapp-section">
        <div className="container text-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              preDefinedMessage
            )}`}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
