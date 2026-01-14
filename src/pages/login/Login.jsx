import { FaGoogle } from "react-icons/fa6";
import "./Login.css";
import ProductDetail from "../prouductDetail/ProductDetail";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginFunction, Register } from "../../servises";
const Login = ({ count, setCount, setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  LoginFunction(email, password).then((info) => {
                    if (info?.access) {
                      localStorage.setItem("ShopToken", info?.access);
                      navigate("/");
                      setToken(info?.access)
                    }
                  });
                }}
              >
                <input
                  onInput={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text" required
                  placeholder="Email or Phone Number"
                />
                <input 
                  onInput={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="text" required
                  placeholder="Password"
                />
                <div className="btns22">
                  <button className="OneBtn">login</button>
                  <button className="TwoBtn">Forget Password?</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
