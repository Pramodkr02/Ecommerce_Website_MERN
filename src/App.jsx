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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
