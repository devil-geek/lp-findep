import React from 'react'
import Form from '../Form/Form';

const Banner = () => {
  return (
      <section className="hero is-white is-large banner">
        <div className="hero-body">
          <div className="container">
            <div className='columns'>
              <div className='column is-7'>
              <h1 className="title has-text-primary is-size-1 has-text-shadow is-spaced">
                Préstamos personales
            </h1>
              <h2 className="subtitle has-text-dark has-text-weight-semibold has-text-shadow">
                Somos un grupo de personas como tú que vemos por ti.
            </h2>
              </div>

              <div className='column is-4 is-5-tablet is-4-desktop'>
              <Form/>
              </div>
            </div>
            
          </div>
        </div>
      <div className='banner-footer'>
        <div className="container">
        <p>
            <span className="title is-size-7 has-text-white has-text-shadow">MICRONEGOCIO: </span>
            <span className="has-text-white is-size-7">
            CAT promedio: 169.4% sin IVA. Para fines informativos y de
            comparación. Fecha de cálculo, 7 de agosto, 2018. Tasa fija. CAT
            vigentes hasta el 6 de febrero, 2019.
              </span>
        </p>

        <p>
            <span className="title has-text-white has-text-shadow is-size-7">CREDIINMEDIATO SIMPLE: </span>
            <span className="has-text-white is-size-7" >
            CAT PROMEDIO 153.7% Sin IVA. Para fines informativos y de
          comparación. Fecha de cálculo 7 de agosto de 2018. Tasa fija.
          CAT vigentes hasta el 6 de febrero de 2019.
              </span>
        </p>
        </div>
      </div>
      </section>
  )
}

export default Banner