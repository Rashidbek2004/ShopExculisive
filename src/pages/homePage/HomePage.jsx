import "./HomePage.css";
import Hero from "../hero/Hero";
import Sales from "../../components/sales/Sales";
import Categoy from "../category/Categoy";
import Selling from "../../components/selling/Selling";
import Music from "../music/Music";
import Explore from "../../components/explore/Explore";
import Arrival from "../arrival/Arrival";
import Deliver from "../deliver/Deliver";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Sales />
      <Categoy />
      {/* <Selling /> */}
      <Sales />

      <Music />
      {/* <Explore /> */}
      <Sales />

      <Sales />

      <Arrival />
      <Deliver />
    </>
  );
};

export default HomePage;
