import React from "react";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
const Slider = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000
  };
  return (
    <div>
      <div className="has-text-centered">
        <SliderSlick {...settings}>
          <div>
            <h1 className="title has-text-primary is-size-2">
              Fácil, rápido y sin tanto rollo.
            </h1>
          </div>
          <div>
            <h1 className="title has-text-primary is-size-2">
              No pedimos anticipos, y obtienes respuesta inmediata.
            </h1>
          </div>
          <div>
            <h1 className="title has-text-primary is-size-2">
              Sin aval, ni garantías.
            </h1>
          </div>
        </SliderSlick>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Slider;
