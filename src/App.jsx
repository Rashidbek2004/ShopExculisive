import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { useState } from "react";
import Contact from "./pages/contact/Contact";
const App = () => {
  const [count, setCount]=useState(3)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login count={count} setCount={setCount}/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
