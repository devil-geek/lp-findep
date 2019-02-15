import React from "react";
import { Element } from 'react-scroll'

import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Requirements from "../../components/Requirements/Requirements";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Information";
import How from "../../components/How/How";
import Slider from "../../components/Slider/Slider";


const Home = () => {

  return (
    <div>
        <Element name="main">
        <div>
          <Banner />
        </div>
        </Element>        
      <Element name="about">
        <div>
          <About />
        </div>
      </Element>
      <Element name="info">
        <Information />
      </Element>
      <Element name="how">
      <div>
        <How />
        </div>
      </Element>
      <Slider />
      <Requirements />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
