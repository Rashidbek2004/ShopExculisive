import { FaRegTrashAlt } from "react-icons/fa";
import "./Wishlistbox.css";
const Wishlistbox = () => {
  return (
    <div className="container">
      <h2 className="loremWishlist">Wishlist (4)</h2>

      <div className="Wishlistboxs">
        <div className="Wishlistbox">
          <div className="LikeIcon">
            <FaRegTrashAlt className="trash" />
          </div>
          <div className="likeImg">
            <img src="/imgs/Frame 610.svg" alt="" />
          </div>
          <div className="nameLike">
            <h3>RGB liquid CPU Cooler</h3>
            <h4>$1960</h4>
          </div>
        </div>{" "}
        <div className="Wishlistbox">
          <div className="LikeIcon">
            <FaRegTrashAlt className="trash" />
          </div>
          <div className="likeImg">
            <img src="/imgs/Frame 610.svg" alt="" />
          </div>
          <div className="nameLike">
            <h3>RGB liquid CPU Cooler</h3>
            <h4>$1960</h4>
          </div>
        </div>{" "}
        <div className="Wishlistbox">
          <div className="LikeIcon">
            <FaRegTrashAlt className="trash" />
          </div>
          <div className="likeImg">
            <img src="/imgs/Frame 610.svg" alt="" />
          </div>
          <div className="nameLike">
            <h3>RGB liquid CPU Cooler</h3>
            <h4>$1960</h4>
          </div>
        </div>{" "}
        <div className="Wishlistbox">
          <div className="LikeIcon">
            <FaRegTrashAlt className="trash" />
          </div>
          <div className="likeImg">
            <img src="/imgs/Frame 610.svg" alt="" />
          </div>
          <div className="nameLike">
            <h3>RGB liquid CPU Cooler</h3>
            <h4>$1960</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlistbox;
