import "./Music.css";
const Music = () => {
  return (
    <div className="music">
      <div className="container">
        <div className="musicInfo">
          <h4>Categories</h4>
          <h1>Enhance Your Music Experience</h1>
          <div className="btnsMusic">
            <button>
              <h3>59</h3>
              <span>Minutes</span>
            </button>
            <button>
              <h3>35</h3>
              <span>Seconds</span>
            </button>{" "}
            <button>
              <h3>59</h3>
              <span>Minutes</span>
            </button>
            <button>
              <h3>35</h3>
              <span>Seconds</span>
            </button>
          </div>
          <button className="buy">Buy Now!</button>
        </div>
        <div className="musicImg">
          <img src="/imgs/Frame 694.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Music;
