import React from 'react'
import Form from '../Form/Form';

const Banner = () => {
  return (
      <section className="hero is-white is-large banner">
        <div className="hero-body">
          <div className="container">
            <div className='columns'>
              <div className='column is-7'>
              <h1 className="title has-text-white is-size-1 has-text-shadow">
                Préstamo fácil
            </h1>
              <h2 className="subtitle has-text-white has-text-weight-semibold has-text-shadow">
                Somos un grupo de personas como tú que vemos por ti.
            </h2>
              </div>

              <div className='column is-4'>
              <Form/>
              </div>
            </div>
            
          </div>
        </div>
      </section>
  )
}

export default Banner