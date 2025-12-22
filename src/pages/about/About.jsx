import "./About.css";
const About = () => {
  return (
    <div className="container">
        <div className="aboutWrite">
            <h3>Home</h3>/
            <h3>About</h3>
        </div>
      <div className="AboutCard">
        <div className="aboutInfo">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="aboutimage">
          <img
            src="/imgs/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
