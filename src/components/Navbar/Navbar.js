/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./logo.png";
import "./Navbar.scss";
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav
      className="navbar is-white is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="logo" />
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="about" spy={true} smooth={true} offset={-50} duration={500} onSetActive={(e) => console.log(e)}>Nuestra empresa</Link>
            <Link className="navbar-item" to="how" spy={true} smooth={true} offset={-60} duration={500} onSetActive={(e) => console.log(e)}>¿Cómo funciona?</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
