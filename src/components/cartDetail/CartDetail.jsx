import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import "./CartDetail.css";
import { Link } from "react-router-dom";
const CartDetail = ({ counter, setCounter }) => {
  return (
    <div>
      <div className="container">
        <div className="h3lorem">
          <h3>Home</h3>/<h3>Cart</h3>
        </div>
        <div className="cartlines">
          <div className="cartline">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          <div className="cartline1">
            <h4>
              <img src="/imgs/Monitor-Cart-Small.svg" alt="" />
              LCD Monitor
            </h4>
            <h4>$650</h4>
            <h4>
              <button>
                <h3>01</h3>
                <div className="wishlistBtnIcons">
                  <div
                    className="wishlistBtnIcon"
                    onClick={() => {
                      setCounter(counter++);
                    }}
                  >
                    <FaChevronUp />
                  </div>
                  <div className="wishlistBtnIcon">
                    <FaChevronDown />
                  </div>
                </div>
              </button>
            </h4>
            <h4>$650</h4>
          </div>{" "}
          <div className="cartline1">
            <h4>
              <img src="/imgs/Gamepad-Cart-Small.svg" alt="" />
              H1 Gamepad
            </h4>
            <h4>$$550</h4>
            <h4>
              <button>
                <h3>02</h3>
                <div className="wishlistBtnIcons">
                  <div className="wishlistBtnIcon">
                    <FaChevronUp />
                  </div>
                  <div className="wishlistBtnIcon">
                    <FaChevronDown />
                  </div>
                </div>
              </button>
            </h4>
            <h4>$1100</h4>
          </div>
        </div>
        <div className="wishlistBtns">
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className="wishlistRow">
          <div className="wishlistButtons">
            <div className="wishlistButton">
              <button>Coupon Code</button>
            </div>
            <div  className="wishlistButton">
              <button>Apply Coupon</button>
            </div>
          </div>
          <div className="wishlistBox">
            <h3 className="cartTotal">Cart Total</h3>
            <div className="totals">
              <div className="total">
                <h4>Subtotal:</h4>
              </div>
              <div className="total">
                <h4>$1750</h4>
              </div>
            </div>{" "}
            <div className="totals">
              <div className="total">
                <h4>Shipping:</h4>
              </div>
              <div className="total">
                <h4>Free</h4>
              </div>
            </div>{" "}
            <div className="totals">
              <div className="total">
                <h4>Total::</h4>
              </div>
              <div className="total">
                <h4>$1750</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
