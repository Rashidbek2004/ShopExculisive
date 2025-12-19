import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./Category.css";
const Categoy = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="browse">
          <div className="by">
            <div className="row">
              <button></button>
              <h3>Categories</h3>
            </div>
            <h1>Browse By Category</h1>
          </div>
          <div className="categorBtns">
            <div className="categorBtn">
              <button>
                <FaArrowLeftLong />
              </button>
            </div>
            <div className="categorBtn">
              <button>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <div className="categoryBox">
          <div className="BoxCard">
            <img src="/imgs/Category-CellPhone.png" alt="" />
            <h4>Phones</h4>
          </div>{" "}
          <div className="BoxCard">
            <img src="/imgs/Category-CellPhone.png" alt="" />
            <h4>Phones</h4>
          </div>{" "}
          <div className="BoxCard">
            <img src="/imgs/Category-CellPhone.png" alt="" />
            <h4>Phones</h4>
          </div>{" "}
          <div className="BoxCard">
            <img src="/imgs/Category-CellPhone.png" alt="" />
            <h4>Phones</h4>
          </div>{" "}
          <div className="BoxCard">
            <img src="/imgs/Category-CellPhone.png" alt="" />
            <h4>Phones</h4>
          </div>{" "}
          <div className="BoxCard">
            <img src="/imgs/Category-CellPhone.png" alt="" />
            <h4>Phones</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoy;
