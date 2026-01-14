import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiSearch, FiUser } from "react-icons/fi";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { GetToken } from "../../servises/token";
const Navbar = ({ modal, setModal, counter, setcounter, token, setToken }) => {
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
                <NavLink to={"/contact"}>contact</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/SignUp"}>SignUp</NavLink>
              </li>
            </ul>
            <form action="">
              <input type="text" placeholder="What are you looking for?" />
              <FiSearch />
            </form>
            <div className="icons">
              <Link to={"/wishlist"} className="icon">
                <FaRegHeart />
              </Link>

              <Link to={"/CartDetail"}>
                <FaShoppingCart className="cart1" />
              </Link>
              {modal && (
                <div className="modal">
                  <Link
                    to={"/Account"}
                    className="modalIcons1"
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    <div className="modalIcon">
                      <FiUser />
                    </div>
                    <div className="modalLorem">
                      <h5>Manage My Account</h5>
                    </div>
                  </Link>
                  <div className="modalIcons">
                    <div className="modalIcon">
                      <RiShoppingBag4Fill />
                    </div>
                    <div className="modalLorem">
                      <h5>My Order</h5>
                    </div>
                  </div>
                  <div className="modalIcons">
                    <div className="modalIcon">
                      <ImCancelCircle />
                    </div>
                    <div className="modalLorem">
                      <h5>My Cancellations</h5>
                    </div>
                  </div>
                  <div className="modalIcons">
                    <div className="modalIcon">
                      <FaStar />
                    </div>
                    <div className="modalLorem">
                      <h5>My Reviews</h5>
                    </div>
                  </div>
                  <Link
                    to={"/"}
                    className="modalIcons5"
                    onClick={() => {
                      setModal(false);
                      setToken(null);
                      localStorage.clear();
                    }}
                  >
                    <div className="modalIcon" onClick={() => {}}>
                      <TbLogout2 />
                    </div>
                    <div className="modalLorem">
                      <h5>Logout</h5>
                    </div>
                  </Link>
                </div>
              )}
              {token ? (
                <div
                  className="icon"
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  <FiUser />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
