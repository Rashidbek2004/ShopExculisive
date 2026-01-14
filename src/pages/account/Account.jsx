import { Link } from "react-router-dom";
import "./Account.css";
import { useEffect, useState } from "react";
import { GetUserData, UserUpdate } from "../../servises";
const Account = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [addres, setAddres] = useState();
  useEffect(() => {
    GetUserData().then((info) => {
      setFirstName(info?.first_name);
      setlastName(info?.last_name);
      setEmail(info?.email_or_phone);
      setAddres(info?.address);
    });
  }, []);
  return (
    <div className="account">
      <div className="container">
        <div className="writesAccount">
          <div className="writeAcc">
            <Link to={"/"} className="grey">
              Home/
            </Link>
            <h5>My Account</h5>
          </div>
          <div className="writeAcc">
            <h5>Welcome</h5>!<h5 className="redd">MdRimel</h5>
          </div>
        </div>
        <div className="All">
          <div className="cardsAccount">
            <div className="account">
              <h3>Manage My Account</h3>
              <div className="my">
                <h5 className="red">My Profile</h5>
                <h5>Address Book</h5>
                <h5>My Payment Options</h5>
              </div>
            </div>
            <div className="orders">
              <h3>My Orders</h3>
              <div className="order">
                <h5>My Returns</h5>
                <h5>My Cancellations</h5>
              </div>
              <h3>My WishList</h3>
            </div>
          </div>

          <div className="BorderCard">
            <h1>Edit Your Profile</h1>
            <div className="profileCards">
              <div className="profileCard">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    UserUpdate(firstName, lastName, email, addres);
                  }}
                >
                  <div className="inputs">
                    First Name
                    <input
                      onInput={(e) => {
                        setFirstName(e.target.value);
                      }}
                      value={firstName}
                      type="text"
                      placeholder="MD"
                    />
                  </div>
                  <div className="inputs">
                    Last Name
                    <input
                      onInput={(e) => {
                        setlastName(e.target.value);
                      }}
                      value={lastName}
                      type="text"
                      placeholder="Rimel"
                    />
                  </div>
                  <div className="inputs">
                    Email
                    <input
                      onInput={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      type="text"
                      placeholder="rimel1111@gmail.com"
                    />
                  </div>
                  <div className="inputs">
                    Address
                    <input
                      onInput={(e) => {
                        setAddres(e.target.value);
                      }}
                      value={addres}
                      type="text"
                      placeholder="Kingston, 5236, United State"
                    />
                  </div>
                </form>
              </div>

              <div className="Password">
                Password Changes
                <form action="">
                  <input type="text" placeholder="Current Passwod" />
                  <input type="text" placeholder="New Passwod" />
                  <input type="text" placeholder="Confirm New Passwod" />
                </form>
              </div>
              <div className="AccButtons">
                <div className="AccButton"></div>
                <div className="accBtn">
                  <div className="AccButton">
                    <button className="cancel">Cancel</button>
                  </div>
                  <div className="AccButton">
                    <button className="save">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
