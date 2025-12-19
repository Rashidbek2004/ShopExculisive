import { FaGoogle } from "react-icons/fa6";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="signUp">
        <div className="container">
          <div className="rows">
            <div className="images">
              <img src="/imgs/Side Image.svg" alt="" />
            </div>
            <div className="info">
              <h1>Log in to Exclusive</h1>
              <h4>Enter your details below</h4>
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
    </>
  );
};

export default Login;
