import React from "react";
import Navbar from "../Navbar/Navabar";
import Footer from "../../components/Footer/Footer";
// import cowimage from "../../assets/images/cow.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className="">
        <div className="">
          <div className="about-banner">
            <h2 className="who-we">
              <span className="performance">About Us</span>
            </h2>
          </div>
          <div className="gap-all gap-for-all">

          <div className="container">
            <div className="row">
              <div className="col-md-7 gene">
                <h3>GENE THERAPTICS</h3>
                <h4 className="performance" style={{color:"#D4281E",fontWeight:"600"}}>Performance Through Excellence</h4>
                <p>
                  Gene theraptics is a leading manufacturer of wide range of
                  animal health and aquaculture products. Gene Theraptics is a
                  technology-based enterprise, where tradition mixes well with
                  courageous entrepreneurship. Gene Theraptics is committed to
                  free competition, and meets it with good performance. At Gene
                  Theraptics, emphasis is in research, development, manufacture
                  and marketing of innovative value-added products and services
                  of highest quality.
                </p>
                <p>
                  Gene theraptics invests the sum of its knowledge, resources
                  and experiences in developing ways to keep healthy and safe
                  livestock and aquaculture production.
                </p>
                <p>
                  Gene theraptics researches, develops, manufactures and
                  markets a specialized product package for both Animal Health
                  and Aquaculture; in particular Drug Formulations, Feed
                  Supplements, Premixes, Biotechnology Formulations, Toxin
                  binders and Toxin control products, and wide range of
                  Biosecurity Formulations.
                </p>
                <p>
                  Gene theraptics emphasis is on Research and Development and
                  has state-of-the-art manufacturing facilities, modern built
                  R&D units and well equipped Quality Control Laboratory. The
                  technologists in the group are very much industry oriented,
                  and have the experience to truly listen to and understand
                  their customers' requirements.
                </p>
              </div>
              <div className="col-md-5 about-image-1">
              <img src="./images/company.jpeg" style={{width:"100%",height:"auto"}} className="about-image" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
