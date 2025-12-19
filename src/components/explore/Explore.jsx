import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";
import "./Explore.css";
import Our from "../our/Our";
const Explore = () => {
  return (
    <div className="explore">
      <div className="container">
        <button></button>
        <span>Our Products</span>
        <div className="rows">
          <h1>Explore Our Products</h1>
          <div className="btns">
            <button>
              <FaArrowLeftLong />
            </button>

            <button>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="exploreBoxes">
          <Our />
          <Our />
          <Our />
          <Our />
        </div>
        <div className="btnCenter">
          <h4>View All Products</h4>
        </div>
      </div>
    </div>
  );
};

export default Explore;
