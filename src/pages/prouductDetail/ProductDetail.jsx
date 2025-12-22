import { FaRegHeart, FaStar } from "react-icons/fa6";
import "./ProductDetail.css";
import { useState } from "react";
const ProductDetail = ({ count, setCount }) => {
  const [mainImg, setMainImg] = useState(" /imgs/Frame 894.png");
  return (
    <>
      <div className="container">
        <div className="proInfo">
          <h3 className="grey">Account</h3>/<h3 className="grey">Gaming</h3>/
          <h3>Havic HV G-92 Gamepad</h3>
        </div>
        <div className="allGemepad">
          <div className="detailInfo">
            <div className="detailImgs">
              <div className="detailImg">
                <img
                  onClick={() => {
                    setMainImg("/imgs/Frame 895.png");
                  }}
                  src="/imgs/Frame 895.png"
                  alt=""
                />
                <img
                  onClick={() => {
                    setMainImg("/imgs/Frame 896.png");
                  }}
                  src="/imgs/Frame 896.png"
                  alt=""
                />
                <img
                  onClick={() => {
                    setMainImg("/imgs/Frame 897.png");
                  }}
                  src="/imgs/Frame 897.png"
                  alt=""
                />
                <img
                  onClick={() => {
                    setMainImg("/imgs/Frame 919.png");
                  }}
                  src="/imgs/Frame 919.png"
                  alt=""
                />
              </div>
              <div className="detailImg1">
                <img src={mainImg} alt="" />
              </div>
            </div>
            <div className="productInfo">
              <h1>Havic HV G-92 Gamepad</h1>
              <div className="productIcons">
                <div className="productIcon">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="grey" />
                </div>
                <div className="rewiew">
                  <h5> (150 Reviews)</h5>
                </div>
                /
                <div className="stok">
                  <h4> In Stock</h4>
                </div>
              </div>
              <div className="detailSpan">
                <h1>$192.00</h1>
              </div>
              <div className="detailLorem">
                <p>
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </p>
              </div>
              <hr />
              <div className="detailColors">
                <h2>Colours:</h2>
                <div className="detailColor">
                  <h3 className="blue">s</h3>
                </div>
                <div className="detailColor">
                  <h3>s</h3>
                </div>
              </div>
              <div className="detailSize">
                <h2>Size:</h2>
                <div className="detailBtn">
                  <button>XS</button>
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
              </div>
              <div className="detailButtons">
                <div className="detailButton">
                  <button
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                  <button>{count}</button>
                  <button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="byBtns">
                  <div className="byBtn">
                    <button>Buy Now</button>
                  </div>
                  <div className="BtnLike">
                    <button>
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
              </div>
              <div className="deatilPhoto">
                <img src="/imgs/Frame 911.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
