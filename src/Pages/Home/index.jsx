import React from "react";
import "../Home/home.css";
import Cursoal from "../../components/Homebanner/cursoal";
import HomeiIems from "../../components/HomeItems/homeitems";
import HomeCat from "../../components/HomeCat";
import Footer from "../../components/Footer/footer";
import Helloj from "../../components/Hello/hello";

const index = () => {
  return (
    <>
      <Cursoal />
      <HomeCat />
      <HomeiIems />
      <Footer />
    </>
  );
};

export default index;
