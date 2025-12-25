import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { useEffect, useState } from "react";
import Contact from "./pages/contact/Contact";
import { getCategory, getProductData } from "./servises";
import About from "./pages/about/About";
import ProductDetail from "./pages/prouductDetail/ProductDetail";
const App = () => {
  const [modal, setModal] = useState(false);
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData] = useState();
  useEffect(() => {
    getCategory()?.then((data) => {
      setCategoryData(data);
    });

    getProductData()?.then((data) => {
      setProductData(data);
    });
  }, []);
  const [count, setCount] = useState(3);
  return (
    <>
      <BrowserRouter>
        <Navbar modal={modal} setModal={setModal} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage categoryData={categoryData} productData={productData} />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Login"
            element={<Login count={count} setCount={setCount} />}
          />
          <Route path="/account" element={<Account />} />
          <Route path="/PruductDetail" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
