import "./HomePage.css";
import Hero from "../hero/Hero";
import Sales from "../../components/sales/Sales";
import Categoy from "../category/Categoy";
import Selling from "../../components/selling/Selling";
import Music from "../music/Music";
import Explore from "../../components/explore/Explore";
import Arrival from "../arrival/Arrival";
import Deliver from "../deliver/Deliver";

const HomePage = ({categoryData, productData}) => {
  return (
    <>
      <Hero categoryData={categoryData}/>
      <Sales productData={productData}/>
      <Categoy categoryData={categoryData}/>
      {/* <Sales productData={productData}/> */}

      <Music />
      {/* <Sales productData={productData}/> */}

      {/* <Sales productData={productData}/> */}

      <Arrival />
      <Deliver />
    </>
  );
};

export default HomePage;
