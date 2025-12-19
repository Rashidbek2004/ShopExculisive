import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";
import "./Sales.css";
import Box from "../box/Box";
const Sales = () => {
  return (
    <div>
      <div className="container">
       
        <div className="rows">
          <div className="lent">
            <div className="row">
              <div className="btn1">
                <button></button>
                <h4>Today’s</h4>
              </div>
              <h1>Flash Sales</h1>
            </div>
            <div className="row1">
              <div className="number">
                <h3>Days</h3>
                <span>03</span>
              </div>
              <span>:</span>
              <div className="number">
                <h3>Hours</h3>
                <span>23</span>
              </div>
              <span> :</span>
              <div className="number">
                <h3>Minutes</h3>
                <span>19</span>
              </div>
              <span>:</span>
              <div className="number">
                <h3>Seconds</h3>
                <span>56</span>
              </div>
            </div>
          </div>
          <div className="btns">
            <button>
              <FaArrowLeftLong />
            </button>
            <button>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="cards">
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        <div className="button">
          <button>View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
