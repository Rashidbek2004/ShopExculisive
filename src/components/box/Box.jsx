import { FaRegHeart, FaStar } from "react-icons/fa6";
import "./Box.css";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
const Box = ({ item }) => {

  return (
    <>
      <Link to={"/PruductDetail"} className="cardBox">
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
          <img
            src={`https://ecommercev01.pythonanywhere.com/${item?.pictures[0]}`}
            alt=""
          />
        </div>
        <h4>{item?.category?.title}</h4>
        <div className="spans">
          <span className="red">
            <span>${item?.price}</span>
          </span>
          <span className="line">
            <span>${item?.discount_price}</span>
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
      </Link>
    </>
  );
};

export default Box;
