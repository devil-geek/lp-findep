import React from 'react'
import test1 from "./testimonial1.png";
import test2 from "./testimonial2.png";

const Clients = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <h1 className="title has-text-info">
              Nuestros clientes
                <hr className="hr" />
            </h1>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-5">
            <article className="media">
              <figure className="media-left">
                <p className="image is-96x96">
                  <img src={test2} alt="testimonial" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    “Me dieron la facilidad para realizar mis pagos en lugares
                    más cercanos a mi casa.”
                      <br />
                    <br />
                    <strong>María Galindo</strong>
                    <br />
                    <small>Empleada</small>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="column is-5">
            <article className="media">
              <figure className="media-left">
                <p className="image is-96x96">
                  <img src={test1} alt="testimonial" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    “Desde hace un año y medio mi negocio de ropa se mantiene
                    en crecimiento; con mi préstamo puedo invertir más en mi
                    negocio.”
                      <br />
                    <br />
                    <strong>Clemencia Mateo</strong>
                    <br />
                    <small>Micronegocio</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients