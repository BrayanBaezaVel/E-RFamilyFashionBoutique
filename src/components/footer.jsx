import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-3">
          Síguenos en nuestras redes sociales para más novedades
        </p>
        <div>
          <a
            href="https://www.instagram.com/e_rfamilyboutique/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            style={{ fontSize: "30px" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/573148110143"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            style={{ fontSize: "30px" }}
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="mt-3">&copy; 2025 Family Boutique - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
