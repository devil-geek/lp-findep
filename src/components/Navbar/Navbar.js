/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from './logo.png';
import "./Navbar.scss";

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
          <img src={logo} alt='logo'/>
        </a>

        <a className="navbar-item is-hidden-desktop">
          <span className="icon badge is-badge-danger" data-badge="9+">
            <i className="fa fa-bell" />
          </span>
        </a>
        <a className="navbar-item is-hidden-desktop">
          <span className="icon badge is-badge-danger" data-badge="8">
            <i className="fa fa-envelope" />
          </span>
        </a>
        <a className="navbar-item is-hidden-desktop">
          <span className="icon">
            <i className="fa fa-user-circle" />
          </span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">
            ¿Cómo funciona?
          </a>
            <a className="navbar-item">
              Sobre nosotros
          </a>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar

