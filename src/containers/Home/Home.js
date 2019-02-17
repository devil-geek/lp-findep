import React from "react";
import { Element } from 'react-scroll'
import queryString from 'query-string'
import MetaTags from 'react-meta-tags';
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Requirements from "../../components/Requirements/Requirements";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Information";
import How from "../../components/How/How";
import Slider from "../../components/Slider/Slider";


const Home = (props) => {
  let title = queryString.parse(props.location.search).t
  let content = "Préstamos personales, tu tienes el plan, nosotros el préstamo que necesitas. En financiera independencia te ofrecemos créditos sin aval, sin garantías, fácil, rápido y sin tanto rollo."
  if(title){
    title = title.replace(/[|&;$%@"<>()_·+,]/g, " ")
    title = title.charAt(0).toUpperCase() + title.slice(1)
    content = title + ", tu tienes el plan, nosotros el préstamo que necesitas. En financiera independencia te ofrecemos créditos sin aval, sin garantías, fácil, rápido y sin tanto rollo."
  }
  return (
    <div>
      <MetaTags>
        <meta name="description" content={content} />
      </MetaTags >
        <Element name="main">
        <div>
          <Banner title={title}/>
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
