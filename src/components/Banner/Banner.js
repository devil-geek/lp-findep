import React from "react";
import Calculator from "../Calculator/Calculator";
import Modal from "../Modal/Modal";
import logo from "../Navbar/logo.png"

const Banner = props => {
  const modal = React.createRef()
  return (
    <section className="hero is-white is-large banner">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <h1
                className="title has-text-primary is-size-1 has-text-shadow is-spaced is-capitalized"
                id="t"
              >
                {props.title || "Préstamos personales"}
              </h1>
              <h2 className="subtitle has-text-dark has-text-weight-semibold has-text-shadow">
                {props.title ? props.title + ", tu tienes el plan, nosotros el préstamo que necesitas." :
                "Somos un grupo de personas como tú que vemos por ti."
                }
              </h2>
            </div>

            <div className="column is-4 is-5-tablet is-4-desktop">
              <Calculator />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-footer">
        <div className="container">
          <div>
            <span className="title is-size-7 has-text-white has-text-shadow underlined-white"
            onClick={() => {modal.current.showModal()}}>
              CAT PROMEDIO: 169.4 % Sin IVA. y CAT PROMEDIO: 153.7 % Sin IVA.{" "}
            </span>
            <br />
            <span className="has-text-white is-size-7">
              Sujeto a aprobación de crédito. Consulta términos, condiciones de
              contratación, tasas de interés y comisiones en
              <a href="www.independencia.com.mx"> www.independencia.com.mx</a>
            </span>
            <Modal ref={modal}>
              <div className="columns is-centered">
              <div className="column is-10">
              <figure className="image is-180x80">
                <img src={logo} alt='logo'/>
              </figure>
              <p>
                Financiera Independencia S.A.B. de C.V., SOFOM, E.N.R., es una
                Sociedad Financiera de Objeto Múltiple, Entidad No Regulada, que
                para su constitución y operación con tal carácter no requiere
                autorización de la Secretaría de Hacienda y Crédito Público y
                está sujeta a la supervisión de la Comisión Nacional Bancaria y
                de Valores, únicamente para efectos de lo dispuesto por el
                artículo 56 de la Ley General de Organizaciones y Actividades
                Auxiliares del Crédito.
              </p>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
