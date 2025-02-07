import React from "react";
import Navbar from "../Navbar/Navabar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="contact-banner">
        <div className="banner-content">
          <h2 className="who-we">
            <span className="performance">Contact Us</span>
          </h2>
          <p>
            We would love to hear from you! Reach out to us for any queries or
            support.
          </p>
        </div>
      </section>

      {/* CONTACT US SECTION */}

      <section className="gap-all" style={{ padding: "50px 20px" }}>
        <h1 className="line card-title performance">
          <span className="how-we" style={{fontWeight:"bold"}}>Reach Out To Us</span>
        </h1>

        <div className="gap-for-all">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-4 contact-maps">
              <br />
              <div className="custom-card">
                <h2 className="card-title performance line" style={{color:"#D4281E"}}>Address</h2>
                <div className="card-content">
                  <FaMapMarkerAlt size={70} color="#D4281E" /> &nbsp;
                  <p className="address" style={{textAlign:"justify"}}>
                    Gene theraptics Drugs and Chemicals Private Limited Corporate
                    Reg. Office: Plant: Plot No. 1, 2, 3, 4, 5, Block No. 23-A, Opp: Lakshmi Ford Service Centre Road Guntur-522001
                  </p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="custom-card">
                <h2 className="card-title performance line" style={{color:"#D4281E"}}>Online</h2>
                <div className="card-content">
                  <CiMail size={30} color="#D4281E" /> &nbsp;
                  <p className="address">mgenetheraptics@yahoo.in</p>
                </div>
                <div className="card-content">
                  <FaPhoneAlt size={24} color="#D4281E" /> &nbsp;
                  <p className="address">91 817896699</p>
                </div>
              </div>
            </div>

            {/* MAP SECTION */}
            <div className="col-md-4 contact-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.283867138898!2d80.42867047108057!3d16.308433598550486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75ae31e24b63%3A0x9239b7e623f6d012!2z4LCc4LGA4LCo4LGNIOCwpeCxhuCwsOCwvuCwquCxjeCwn-Cwv-CwleCxjeCwuOCxjSDgsKvgsL7gsLDgsY3gsK7gsL4g4LCq4LC_4LC14LCf4LGNIOCwjuCwsuCxjeCwn-CxgOCwoeCxgA!5e0!3m2!1ste!2sin!4v1738081997313!5m2!1ste!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* FORM SECTION */}
            <div className="col-md-4 contact-maps">
              <div className="form-card">
                <form className="custom-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="custom-input"
                      id="Name"
                      placeholder="Your Name*"
                      required
                      name="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="custom-input"
                      id="Email"
                      placeholder="Your Email*"
                      required
                      name="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="custom-input"
                      id="ContactNumber"
                      placeholder="Contact Number*"
                      required
                      name="ContactNumber"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="custom-input"
                      id="Subject"
                      placeholder="Subject*"
                      required
                      name="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="custom-textarea"
                      id="Message"
                      placeholder="Message*"
                      required
                      name="Message"
                    ></textarea>
                  </div>
                  <a
                    href="#learn-more-1"
                    className="btn btn-primary animate__animated animate__fadeIn"
                  >
                    SEND MESSAGE
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
