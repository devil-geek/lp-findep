import React from "react";
import { Link } from "react-scroll";

import logo1 from "./Logo1.png";
import logo2 from "./Logo2.png";
import logo3 from "./Logo3.png";
import logo4 from "./Logo4.png";
import logo5 from "./Logo5.png";

const Footer = () => {
  return (
    <section className="section require footer">
      <div className="container">
        <div className="columns">
          <div className="column is-size-6">
            <p className="has-text-weight-semibold">CONTÁCTANOS</p>
            <p>
              <span className="icon">
                <i className="fa fa-phone fa-flip-horizontal" />
              </span>{" "}
              01 800-600-0009
            </p>
            <p>
              <a
                href="https://www.instagram.com/financieraindependenciaoficial/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-instagram fa-2x" />
                </span>
              </a>
              <a
                href="https://www.facebook.com/Financiera.Indep/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-facebook-f fa-2x" />
                </span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCeIISxyPtdmouQatpSWIRMw?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <i className="fab fa-youtube fa-2x" />
                </span>
              </a>
            </p>
          </div>
          <div className="column is-size-6 has-text-centered">
            <p className="has-text-weight-semibold">HORARIOS DE ATENCIÓN</p>
            <p>
              <span className="has-text-weight-semibold">
                Lunes a viernes:{" "}
              </span>
              09:00 a las 18:30 hrs.
            </p>
            <p>
              <span className="has-text-weight-semibold">Sábados:</span> 09:30 a
              13:30 hrs.
            </p>
            <br />
            <br />
            <p>
              <Link
                className="button is-link is-small"
                to="main"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onSetActive={e => console.log(e)}
              >
                ¡SOLICITA TU PRÉSTAMO AQUÍ!
              </Link>
            </p>
          </div>
          <div className="column is-size-6">
            <div className="is-pulled-right">
              <p className="has-text-weight-semibold">INFORMACIÓN</p>
              <p>
                <a href="#" className="underlined"> Aviso de privacidad </a>
              </p>
              <p>
                {" "}
                <a href="#" className="underlined">Términos y condiciones</a>
              </p>
            </div>
          </div>
        </div>

        <div className="group has-text-centered">
          <h1 className="title is-size-5">
            <span>Grupo FINDEP</span>
          </h1>
          <hr />
          <br />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={logo1} alt="Logo 1" />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img src={logo2} alt="Logo 2" />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img src={logo3} alt="Logo 3" />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img src={logo4} alt="Logo 4" />
              </figure>
            </div>
            <div className="column">
              <figure className="image">
                <img src={logo5} alt="Logo 5" />
              </figure>
            </div>
          </div>
          <br />
          <p className="is-size-5">
            Financiera Independencia S.A.B. de C.V. SOFOM. E.N.R.
          </p>
          <p className="is-size-7">
            Estamos constituidos como una SOFOM, ENR, es decir, no requerimos
            autorización de la SHCP para la realización de operaciones de
            crédito, y estamos sujetos a la supervisión de la Comisión Nacional
            Bancaria y de Valores únicamente para efectos de lo dispuesto por el
            artículo 56 de la Ley General de Organizaciones y Actividades
            Auxiliares del Crédito”.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
