import "./Account.css";
const Account = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="writesAccount">
          <div className="writeAcc">
            <h5 className="grey">Home/</h5>
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
                <div className="accountForm">
                  <h3>First Name</h3>
                  <form action="">
                    <input type="text" placeholder="MD" />
                  </form>
                  <h3>email</h3>
                  <form action="">
                    <input type="text" placeholder="rimel1111@gmail.com" />
                  </form>
                </div>
                <div className="accountForm">
                  <h3>last name</h3>
                  <form action="">
                    <input type="text" placeholder="Rimel" />
                  </form>
                  <h3>Address</h3>
                  <form action="">
                    <input
                      type="text"
                      placeholder="Kingston, 5236, United State"
                    />
                  </form>
                </div>
              </div>

              <div className="Password">
                Password Changes
                <form action="">
                  <input type="text" placeholder="Current Passwod" />
                </form>
                <form action="">
                  <input type="text" placeholder="New Passwod" />
                </form>
                <form action="">
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
