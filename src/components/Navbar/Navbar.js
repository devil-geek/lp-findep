/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo_fisa from "./logo.png";
import logo_aef from "./logo_aef.png";
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav
      className={process.env.REACT_APP_ENV === "FISA" ? "navbar is-white is-fixed-top" : "navbar is-info is-fixed-top"}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img className={process.env.REACT_APP_ENV === "FISA" ? "" : "logo-aef"} src={process.env.REACT_APP_ENV === "FISA" ? logo_fisa : logo_aef} alt="logo" />
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="about" spy={true} smooth={true} offset={-50} duration={500}>Nuestra empresa</Link>
            <Link className="navbar-item" to="how" spy={true} smooth={true} offset={-60} duration={500}>¿Cómo funciona?</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
