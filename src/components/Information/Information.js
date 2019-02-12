import React from 'react'

const Informations = () => {
  return (
    <section className="section information">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <h1 className="title has-text-info has-text-shadow">
              Información de tu préstamo
              </h1>
            <hr className="hr" />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="title is-size-4 has-text-white has-text-shadow">MICRONEGOCIO: </h1>
            <br />
            <br />
            <p className="has-text-white">
              CAT promedio: 169.4% sin IVA. Para fines informativos y de
              comparación. Fecha de cálculo, 7 de agosto, 2018. Tasa fija. CAT
              vigentes hasta el 6 de febrero, 2019.
              </p>
          </div>
          <div className="column">
            <h1 className="title is-size-4 has-text-white has-text-shadow">
              CREDIINMEDIATO SIMPLE:
              </h1>
            <br />
            <br />
            <p className="has-text-white">
              CAT PROMEDIO 153.7% Sin IVA. Para fines informativos y de
              comparación. Fecha de cálculo 7 de agosto de 2018. Tasa fija.
              CAT vigentes hasta el 6 de febrero de 2019.
              </p>
          </div>
        </div>
        <br />

        <h1 className="title is-size-4 has-text-white has-text-shadow">
          EJEMPLOS DE PRÉSTAMOS
          </h1>
        <br />
        <br />
        <p className="has-text-white">
          <strong className='has-text-white'>A)</strong> Si pides $8,980/ sólo pagas: $ 294, a plazos: 52 semanas, tasa de
            interés anual fija: 114.80% CAT: 178.94%.Total a pagar: $15, 250.22{" "}
        </p>
        <p className="has-text-white">
          <strong className='has-text-white'>B)</strong> Si pides $11,170/ sólo pagas: $ 563, a plazos: 48 quincenas, tasa
          de interés anual fija: 105.60% CAT: 178.94%. Total a pagar:
          $26,978.69
          </p>
        <hr />
        <p className="has-text-white">
          Sujeto a aprobación de crédito. Consulta términos, condiciones de
          contratación, tasas de interés y comisiones en:
          www.independencia.com.mx
          </p>
      </div>
    </section>
  )
}

export default Informations