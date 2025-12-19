import { FaStar } from "react-icons/fa6";
import "./Our.css";
const Our = () => {
  return (
    <>
      <div className="exploreBox">
        <div className="img">
          <img src="/imgs/71RdoeXxtrL 1.png" alt="" />
        </div>
        <h4>Breed Dry Dog Food</h4>
        <div className="spans1">
          <div className="exploreIcon">
            <div className="span1">
              <h4>$100</h4>
            </div>
            <div className="icon1">
              <FaStar className="star" />
            </div>
            <div className="icon1">
              <FaStar className="star" />
            </div>
            <div className="icon1">
              <FaStar className="star" />
            </div>
            <div className="icon1">
              <FaStar className="star" />
            </div>
            <div className="price">
              <h4>(35)</h4>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Our;
