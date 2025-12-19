import { IoSendSharp } from "react-icons/io5";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="Exclusive">
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <h6>Get 10% off your first order</h6>
          <form action="">
            <input type="text" placeholder="Enter your email" />
            <IoSendSharp />
          </form>
        </div>
        <div className="Support">
          <h2>Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <h5>exclusive@gmail.com</h5>
          <h5>+88015-88888-9999</h5>
        </div>
        <div className="Account">
          <h3>Account</h3>
          <h4>My Account</h4>
          <h4>Login / Register</h4>
          <h4>Cart</h4>
          <h4>Wishlist</h4>
          <h4>Shop</h4>
        </div>
        <div className="Quick">
          <h4>Quick Link</h4>
          <h4>Terms Of Use</h4>
          <h4>FAQ</h4>
          <h4>Contact</h4>
        </div>
        <div className="load">
          <div className="Download">
            <h4>Download</h4>
            <h4>Save $3 with App New User Only</h4>
          </div>
          <div className="footerImg">
            <div className="qrCode">
              <img src="/imgs/Qr Code.png" alt="" />
            </div>
            <div className="btnImages">
              <div className="btnImg">
                <img
                  src="/imgs/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                  alt=""
                />
              </div>
              <div className="btnImg">
                <img src="/imgs/download-appstore.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
