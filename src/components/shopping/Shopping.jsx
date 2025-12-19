import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa6";
import "./Shopping.css";
const Shopping = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="sellingBox">
          <div className="sellingIcons">
            <div className="sellingIcon"></div>
            <div className="ruw">
              <div className="sellingIcon">
                <h4>
                  <FaRegHeart className="top" />
                </h4>
              </div>
              <div className="sellingIcon">
                <h4>
                  {" "}
                  <FaRegEye className="top" />
                </h4>
              </div>
            </div>
          </div>
          <div className="images">
            <img
              src="/imgs/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png"
              alt=""
            />
          </div>
          <h3>The north coat</h3>
          <div className="spans">
            <span>$260</span>
            <span>$360</span>
          </div>
          <div className="icons">
            <div className="icon">
              <FaStar />
            </div>
            <div className="icon">
              <FaStar />
            </div>{" "}
            <div className="icon">
              <FaStar />
            </div>{" "}
            <div className="icon">
              <FaStar />
            </div>{" "}
            <div className="icon">
              <FaStar />
            </div>{" "}
            <div className="icon">
              <FaStar />
            </div>
            <span>(65)</span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Shopping;
