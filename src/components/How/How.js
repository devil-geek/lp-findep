import React from "react";

const How = () => {
  return (
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
                    Te daremos respuesta a tu solicitud en tiempo real para que
                    no pierdas tiempo.
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
  );
};

export default How;
