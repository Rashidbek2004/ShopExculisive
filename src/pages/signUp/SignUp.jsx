import { FaGoogle } from "react-icons/fa6";
import "./SignUp.css";
import About from "../about/About";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Register } from "../../servises";
const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Register(name, email, password).then((info) => {
                  if (
                    info?.message ==
                    "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tkazildi."
                  )
                    setName("");
                  setEmail("");
                  setPassword("");
                  navigate("/login");
                });
              }}
              action=""
            >
              <input
                value={name}
                onInput={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                required
                placeholder="Name"
              />
              <input
                value={email}
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                required
                placeholder="Email or Phone Number"
              />
              <input
                value={password}
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                required
                placeholder="Password"
              />
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
                  <Link to={"/login"} className="in">
                    Log in
                  </Link>
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
