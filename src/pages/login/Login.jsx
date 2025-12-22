import { FaGoogle } from "react-icons/fa6";
import "./Login.css";
import ProductDetail from "../prouductDetail/ProductDetail";
const Login = ({count, setCount}) => {
  return (
    <>
      <div className="signUp">
        <div className="container">
          <div className="rows">
            <div className="images">
              <img src="/imgs/Side Image.svg" alt="" />
            </div>
            <div className="info">
              <h2>Log in to Exclusive</h2>
              <h5>Enter your details below</h5>
              <form action="">
                <input type="text" placeholder="Email or Phone Number" />
                <input type="text" placeholder="Password" />
              </form>
              <div className="btns22">
                <button className="OneBtn">Log In</button>
                <button className="TwoBtn">Forget Password?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetail count={count} setCount={setCount}/>
    </>
  );
};

export default Login;
