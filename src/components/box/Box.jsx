import { FaRegHeart, FaStar } from "react-icons/fa6";
import "./Box.css";
import { BiSolidHide } from "react-icons/bi";
const Box = () => {
  return (
    <>
      <div className="cardBox">
        <div className="bten">
          <button>Add To Cart</button>
        </div>
        <div className="buttons">
          <button>-40%</button>
        </div>
        <div className="likes">
          <div className="like">
            <FaRegHeart />
          </div>
          <div className="like">
            <BiSolidHide />
          </div>
        </div>
        <div className="image">
          <img src="/imgs/g92-2-500x500 1.png" alt="" />
        </div>
        <h4>HAVIT HV-G92 Gamepad</h4>
        <div className="spans">
          <span className="red">
            <span>$120</span>
          </span>
          <span className="line">
            <span>$160</span>
          </span>
        </div>
        <div className="boxses">
          <div className="icons">
            <div className="icon">
              <FaStar />
            </div>
            <div className="icon">
              <FaStar />
            </div>
            <div className="icon">
              <FaStar />
            </div>
            <div className="icon">
              <FaStar />
            </div>
            <div className="icon">
              <FaStar />
            </div>
            <div className="icon">
              <FaStar />
            </div>
            <div className="sakkiz">
              <h5>(88)</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
