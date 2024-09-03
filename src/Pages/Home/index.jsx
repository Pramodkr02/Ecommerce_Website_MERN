import React from "react";
import "../Home/home.css";
import Cursoal from "../../components/Homebanner/cursoal";
import HomeiIems from "../../components/HomeItems/homeitems";
import HomeCat from "../../components/HomeCat";
import Footer from "../../components/Footer/footer";
import Helloj from "../../components/Hello/hello";
import Header from "../../components/header/header";

const index = () => {
  return (
    <>
      <Header />
      <Cursoal />
      <HomeCat />
      <HomeiIems />
      <Footer />
    </>
  );
};

export default index;
