import React from "react";
import "../Home/home.css";
import Cursoal from "../../components/Homebanner/cursoal";
import HomeiIems from "../../components/HomeItems/homeitems";
import HomeCat from "../../components/HomeCat";
import Footer from "../../components/Footer/footer";
import NewLaunch from "../../components/Newlaunch/newlaunch";
import Header from "../../components/header/header";
import ViewRecent from "../../components/ViewRecent/viewrecent";
import MegaSell from "../../components/MegaSell/megacell";

const index = () => {
  return (
    <>
      <Header />
      <Cursoal />
      <HomeCat />
      <HomeiIems />
      <ViewRecent />
      <MegaSell />
      <NewLaunch />
      <Footer />
    </>
  );
};

export default index;
