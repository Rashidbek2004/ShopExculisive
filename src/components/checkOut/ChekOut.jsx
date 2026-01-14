import "./ChekOut.css";
const ChekOut = () => {
  return (
    <div>
      <div className="container">
        <div className="checkOutWrite">
          <h5>Account</h5>/<h5>My Account</h5>/<h5>Product</h5>/
          <h5>View Cart</h5>/<h5>CheckOut</h5>
        </div>
        <div className="billing">
          <h2>Billing Details</h2>
        </div>
        <div className="checkOutDetails">
          <div className="checkOutForms">
            <form action="">
              <h5>First Name*</h5>
              <input type="text" required />
              <h5>Company Name</h5>
              <input type="text" required />
              <h5>Street Address*</h5>
              <input type="text" required />
              <h5>Apartment, floor, etc. (optional)</h5>
              <input type="text" required />
              <h5>Town/City*</h5>
              <input type="text" required />
              <h5>Phone Number*</h5>
              <input type="text" required />
              <h5>Email Address*</h5>
              <input type="text" required />
            </form>
            <div className="checkSpans">
              <input type="checkbox" />
              <span>Save this information for faster check-out next time</span>
            </div>
          </div>
          <div className="checkOutInfo">
            <div className="checkProduct">
              <div className="checkProductImg">
                <img src="/imgs/g92-2-500x500 1.svg" alt="" />
              </div>
              <div className="checkName">
                <h4>LCD Monitor</h4>
              </div>
              <div className="checkPrise">
                <h4>$650</h4>
              </div>
            </div>
            <div className="checkProduct">
              <div className="checkProductImg">
                <img src="/imgs/Monitor-Cart-Small (1).svg" alt="" />
              </div>
              <div className="checkName">
                <h4>H1 Gamepad</h4>
              </div>
              <div className="checkPrise">
                <h4>$1100</h4>
              </div>
            </div>
            <div className="Subtotals">
              <div className="subtotal">
                <h4>Subtotal:</h4>
                <h4>$1750</h4>
              </div>
              <div className="subtotal">
                <h4>Shipping:</h4>
                <h4>Free</h4>
              </div>
              <div className="subtotal">
                <h4>Total:</h4>
                <h4>$1750</h4>
              </div>
            </div>
            <div className="banks">
              <input type="radio" />
              <h4>Bank</h4>
              <div className="banksImg">
                <img src="/imgs/Frame 834.svg" alt="" />
              </div>
            </div>
            <div className="banks1">
              <input type="radio" />
              <h4>Cash on delivery</h4>
            </div>
            <div className="cupons">
              <div className="cuponBtn">
                <button>Coupon Code</button>
              </div>
              <div className="cuponBtn">
                <button>Apply Coupon</button>
              </div>
            </div>
            <div className="placeBtn">
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChekOut;
