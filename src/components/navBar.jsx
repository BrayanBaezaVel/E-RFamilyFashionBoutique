import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#6f42c1" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          E&R FAMILY FASHION BOUTIQUE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <Link className="nav-link text-white" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/categories" className="nav-link text-white">
                Catálogo
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
