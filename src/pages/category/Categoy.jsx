import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./Category.css";
const Categoy = ({ categoryData }) => {
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
          {categoryData?.map((item) => {
            console.log();
            
            return (
              <div className="BoxCard">
                <img src={item?.image} alt="" />
                <h4>{item?.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categoy;
