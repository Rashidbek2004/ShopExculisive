import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaRegEye,
  FaRegHeart,
  FaStar,
} from "react-icons/fa6";
import "./Selling.css";
import Shopping from "../shopping/Shopping";
const Selling = () => {
  return (
    <div className="selling">
      <div className="container">
        <div className="browse">
          <div className="by">
            <div className="row">
              <button></button>
              <h3>This Month</h3>
            </div>
            <h1>Best Selling Products</h1>
          </div>
          <div className="categorBtns">
            <div className="categorSelling">
              <button>View All</button>
            </div>
          </div>
        </div>
        <div className="sellingCard">
         <Shopping/>
         
        </div>
      </div>
    </div>
  );
};

export default Selling;
