import { FaGoogle } from "react-icons/fa6";
import "./SignUp.css";
import About from "../about/About";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signUp">
      <div className="container">
        <div className="rows">
          <div className="images">
            <img src="/imgs/Side Image.svg" alt="" />
          </div>
          <div className="info">
            <h1>Create an account</h1>
            <h4>Enter your details below</h4>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email or Phone Number" />
              <input type="text" placeholder="Password" />
              <div className="btn">
                <button>Create Account</button>
              </div>
            </form>
            <div className="buttons">
              <div className="btn">
                <button className="google">
                  <FaGoogle className="googleIcon" />
                  <h4>Sign up with Google</h4>
                </button>
                <div className="loremLogin">
                  <h4 className="have">Already have account? </h4>{" "}
                  <Link to={"/login"} className="in">Log in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
