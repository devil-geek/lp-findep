import React from 'react'
import {useCountUp} from 'react-countup';
import { Link } from 'react-scroll'

const Information = () => {
  const { countUp, start } = useCountUp({
    start: 0,
    end: 280000,
    delay: 0,
    duration: 3.5,
    separator: ",",
  });

  return (
    <section className="hero is-medium is-info is-bold information">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="subtitle is-size-1">
            Actualmente ¡Tenemos <span className="has-text-weight-bold">
              más de <span>{countUp}</span> clientes satisfechos</span> y vamos por más sueños que cumplir!
          </h1>
          <Link className="is-hidden" to="about" spy={true} smooth={true} offset={-50} duration={500} onSetActive={(e) => {
            if(e === "about"){
              start()
            }
          }}/>
        </div>
      </div>
    </section>
  )
}

export default Information