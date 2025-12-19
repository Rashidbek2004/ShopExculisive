import "./Arrival.css";
const Arrival = () => {
  return (
    <div>
      <div className="container">
        <div className="arrivalBtn">
          <button></button>
          <div className="arrivalSpan">
            <h6>Featured</h6>
          </div>
        </div>
        <div className="new">
          <h2>New Arrival</h2>
        </div>
        <div className="images">
          <div className="image">
            <img src="/imgs/Frame 684.png" alt="" />
          </div>
          <div className="image">
            <div className="mainImg">
              <img src="/imgs/Frame 685.png" alt="" />
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/imgs/Frame 686.png" alt="" />
              </div>
              <div className="photo">
                <img src="/imgs/Frame 687.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
