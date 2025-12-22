import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiSearch, FiUser } from "react-icons/fi";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="rows">
          <div className="row"></div>
          <div className="row">
            <h6>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h6>
          </div>
          <div className="row">
            <h4>English</h4>
          </div>
        </div>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <h1>
                <span>E</span>
                <span>x</span>
                <span>c</span>
                <span>u</span>
                <span>l</span>
                <span>i</span>
                <span>s</span>
                <span>i</span>
                <span>v</span>
                <span>e</span>
              </h1>
            </div>
            <ul>
              <li>
                <NavLink to={"/"}>home</NavLink>
              </li>
              <li>
                <NavLink to={"/SignUp"}>SignUp</NavLink>
              </li>
              <li>
                <NavLink to={"/Login"}>Login</NavLink>
              </li>
               <li>
                <NavLink to={"/account"}>Account</NavLink>
              </li>
               <li>
                <NavLink to={"/contact"}>contact</NavLink>
              </li>
            </ul>
            <form action="">
              <input type="text" placeholder="What are you looking for?" />
              <FiSearch />
            </form>
            <div className="icons">
              <div className="icon">
                <FaRegHeart />
              </div>
              <div className="icon">
                <FaShoppingCart />
              </div>
              <div className="icon">
                <FiUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
