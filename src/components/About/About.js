import React from "react";
import Information from "../Information/Information";

const About = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title has-text-info">
                Nuestra empresa
                <hr className="hr" />
              </h1>
            </div>
            <div className="column">
              <p>
                A lo largo de nuestra historia nos hemos consolidado como una de
                las principales empresas de préstamos en México, gracias a
                nuestra diversidad, solidez y conductas apegadas a nuestros
                Valores, buscando siempre dar apoyo a empleados y pequeños
                comerciantes; filosofía que sin duda, nos ha identificado y nos
                compromete a ser mejores cada día.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Information />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title has-text-primary">¿Cómo funciona?</h1>
              <div className="timeline">
                <ol>
                  <li>
                    <p>Personaliza tu préstamo.</p>
                    <p>
                      <strong>Es fácil, rápido y sin complicaciones.</strong>
                    </p>
                  </li>
                  <li>
                    <p>Queremos saber más de ti.</p>
                    <p>
                      Tus{" "}
                      <strong>
                        datos con nosotros están siempre protegidos.
                      </strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Obtén tu respuesta en minutos.</strong>
                    </p>
                    <p>
                      Te daremos respuesta a tu solicitud en tiempo real para
                      que no pierdas tiempo.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="column side-back">
              <h1 className="title has-text-white has-text-shadow">
                Más que un préstamo <br />
                somos una solución, somos independencia, somos apoyo.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="has-text-centered">
        <h1 className="title has-text-primary is-size-2">
          Fácil, rápido y sin tanto rollo.
        </h1>
      </div>
      <br />
    </div>
  );
};

export default About;
