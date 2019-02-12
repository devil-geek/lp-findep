import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Requirements from "../../components/Requirements/Requirements";
import Clients from "../../components/Clients/Clients";
import Information from "../../components/Information/Information";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Requirements/>
      <Clients/>
      <Information/>
      <Footer/>
    </div>
  );
};

export default Home;
