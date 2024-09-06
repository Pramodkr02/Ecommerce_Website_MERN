import React from "react";
import Header from "./components/header/header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import About from "./Pages/About/index";
import Login from "./Pages/Login/login";
import SignUp from "./Pages/SignUp/signup";
import ForgotPassword from "./Pages/ForgotPassword/forgotpassword";
import AboutUs from "./Pages/AboutUs/aboutus";
import MyAccount from "./Pages/MyAccount/myaccount";
import ShopingSection from "./components/ShopingSection/shopingsection";
import ProductDetail from "./components/ProductDetails/productdetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/about" element={<About />} />
          <Route exact={true} path="/login" element={<Login />} />
          <Route exact={true} path="/signup" element={<SignUp />} />
          <Route exact={true} path="/aboutus" element={<AboutUs />} />
          <Route
            exact={true}
            path="/forgotpassword"
            element={<ForgotPassword />}
          />
          <Route exact={true} path="/myaccount" element={<MyAccount />} />
          <Route
            exact={true}
            path="/shopingsection"
            element={<ShopingSection />}
          />
          <Route
            exact={true}
            path="/productdetail"
            element={<ProductDetail />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
