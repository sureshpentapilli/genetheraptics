import { useParams, useLocation, useNavigate } from "react-router-dom";
import { itemsData } from "../../data/itemsData";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SubcategoryPage.css"; // Custom CSS for additional styling
import Navbar from "../Navbar/Navabar";
import Footer from "../../components/Footer/Footer";

function SubcategoryPage() {
  const { id, itemId } = useParams();
  console.log("id from useParams:....", id);
  console.log("items......",itemsData)
  const location = useLocation();
  const navigate = useNavigate();
  const selectedItem = location.state || null;

  const categoryItems = itemsData[id] || [];
  console.log("Fetched Category Items:......", categoryItems);

  const item =
    selectedItem ||
    categoryItems.find((product) => product.id.toString() === itemId);
  console.log("id from useParams......", id);
  console.log("itemsData structure......", itemsData);

  if (!item) {
    return <h2 className="text-danger">Item not found</h2>;
  }

  const similarProducts = Object.values(itemsData)
  .flat()
  .filter((product) => product.id !== selectedItem?.id);

  // const similarProducts = (itemsData[id] || []).filter(
  //   (product) => product.id.toString() !== itemId
  // );
  
 

  console.log("similarProducts......", similarProducts);

  // Custom Previous Arrow
  const PrevArrow = (props) => (
    <button
      className="custom-arrow prev"
      onClick={props.onClick}
      style={{ alignItems: "center", display: "flex" }}
    >
      <FaChevronLeft />
    </button>
  );

  // Custom Next Arrow
  const NextArrow = (props) => (
    <button
      className="custom-arrow next"
      onClick={props.onClick}
      style={{ alignItems: "center", display: "flex" }}
    >
      <FaChevronRight />
    </button>
  );

  // Slick Slider Settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section>
        <Navbar />
      </section>
      <section class="banner-section">
        <div class="banner-text">
          <h1>POULTRY</h1>
          {/* <p>Explore the best products and services.</p> */}
        </div>
        <div class="banner-container">
          <div class="banner-overlay"></div>
          <img
            src="/images/poultrybanner3.jpg"
            alt="Banner Image"
            class="banner-image"
          />
        </div>
      </section>
      <section style={{ padding: "50px 0px" }}>
        <div className="container">
          <div className="row">
            {/* Image Section (col-md-3) */}
            <div className="col-md-3 text-center">
              <img
                src={item.img}
                alt={item.name}
                className="img-fluid rounded shadow"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>

            {/* Description Section (col-md-9) */}
            <div className="col-md-9">
              {/* Name */}
              <h2 className="fw-bold text-primary">{item.name}</h2>

              {/* Description (if available) */}
              {item.description && (
                <p className="text-muted">{item.description}</p>
              )}

              {/* Composition (if available) */}
              {item.composition && (
                <>
                  <h5 className="fw-semibold">
                    Composition (Each 500gms contain):
                  </h5>
                  <ul>
                    {item.composition
                      ?.split("\n")
                      .map((point, index) =>
                        point.trim() ? (
                          <li key={index}>{point.replace("-", "").trim()}</li>
                        ) : null
                      )}
                  </ul>
                </>
              )}

              {/* Features (if available) */}
              {item.features && (
                <>
                  <h5 className="fw-semibold">Features:</h5>
                  <ul>
                    {item.features
                      ?.split("\n")
                      .map((point, index) =>
                        point.trim() ? (
                          <li key={index}>{point.replace("✔", "").trim()}</li>
                        ) : null
                      )}
                  </ul>
                </>
              )}

              {/* Dosage (if available) */}
              {item.dosage && (
                <>
                  <h5 className="fw-semibold">Dosage:</h5>
                  <p>{item.dosage}</p>
                </>
              )}

              {/* Dosage (if available) */}
              {item.benefits && (
                <>
                  <h5 className="fw-semibold">benefits:</h5>
                  <p>{item.benefits}</p>
                </>
              )}

              {/* Disclaimer (if available) */}
              {item.disclaimer && (
                <>
                  <h5 className="fw-semibold">Disclaimer:</h5>
                  <p className="text-danger">{item.disclaimer}</p>
                </>
              )}
            </div>
          </div>

          {/* Similar Products Slider */}
          {similarProducts.length > 0 && (
            <div className="mt-5">
              <h3 className="fw-bold">Similar Products</h3>
              <div className="slider-container">
                <Slider {...sliderSettings}>
                  {similarProducts.map((product) => (
                    <div key={product.id} className="text-center px-2">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="img-fluid rounded shadow"
                        style={{
                          height: "180px",
                          width: "100%",
                          objectFit: "cover",
                          cursor: "pointer",
                          outline: "none",
                        }}
                        onClick={() =>
                          navigate(`/subcategory/${id}/${product.id}`, {
                            state: product,
                          })
                        }
                      />
                      <p className="mt-2 fw-semibold">{product.name}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default SubcategoryPage;
