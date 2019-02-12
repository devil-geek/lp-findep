import React from 'react'
import doc from './icono-documento.svg'
import dom from './icono-domicilio.svg'
import country from './icono-pais.svg'
const Requirements = () => {
  return (
      <section className="section require">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <h1 className="title has-text-info">
                ¿Qué necesitas para solicitarlo?
              </h1>
              <hr className="hr" />
            </div>
          </div>
          <div className="columns has-text-centered">
            <div className="column">
            <figure className='image is-128x128 centered'>
              <img src={doc} alt='Identificación'/>
            </figure>
              <h1 className="title is-size-4 has-text-primary">Identificación</h1>
              <br />
              <p>Tener identificación oficial vigente</p>
            </div>
            <div className="column">
            <figure className='image is-128x128 centered'>
              <img src={country} alt='Ser mexicano' />
            </figure>
              <h1 className="title is-size-4 has-text-primary">Ser mexicano</h1>
              <br />
              <p>Tener entre 18 y 68 años 11 meses.</p>
            </div>
            <div className="column">
            <figure className='image is-128x128 centered'>
              <img src={dom} alt='Comprobante de domicilio' style={{ width: '96px', margin: 'auto'}}/>
            </figure>
              <h1 className="title is-size-4 has-text-primary">Comprobante de domicilio</h1>
              <br />
              <p>(Recibo de luz o teléfono)</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Requirements