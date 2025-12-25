import { Link } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="ContactWrites">
        <div className="ContactWrite">
          <Link to={"/"} className="h4">Home</Link>
        </div>
        /
        <div className="ContactWrite">
          <h4>Cantact</h4>
        </div>
      </div>
      <div className="container">
        <div className="AllContact">
          <div className="contactInfo">
            <div className="contactBox">
              <div className="ContactImgs">
                <div className="ContactImg">
                  <img src="/imgs/icons-phone.png" alt="" />
                </div>
                <div className="call">
                  <h3>Call To Us</h3>
                </div>
              </div>
              <div className="four">
                <h5>We are available 24/7, 7 days a week.</h5>
                <h5 className="hr"> Phone: +8801611112222</h5>
              </div>
              <hr />
            </div>
            <div className="contactBox">
              <div className="ContactImgs">
                <div className="ContactImg">
                  <img src="/imgs/icons-mail.png" alt="" />
                </div>
                <div className="call">
                  <h3>Write To US</h3>
                </div>
              </div>
              <div className="four">
                <h5>
                  Fill out our form and we will contact you within 24 hours.
                </h5>
                <h5>Emails: customer@exclusive.com</h5>
                <h5>Emails: support@exclusive.com</h5>
              </div>
            </div>
          </div>

          <div className="contactForms">
            <form action="">
              <input type="text" placeholder="Your Name *" />
              <input type="text" placeholder="Your Email *" />
              <input type="text" placeholder="Your Phone *" />
            </form>
            <div className="contactForm">
              <textarea name="" id="" placeholder="Your Massage"></textarea>
            </div>
            <div className="contactBtns">
              <div className="contactBtn"></div>
              <div className="contactBtn">
                <button>Send Massage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
