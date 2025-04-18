import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactoBoutique() {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
    >
      <div className="container py-5">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <div className="row justify-content-center">
          {/* Información de contacto */}
          <div className="col-md-6 mb-4 d-flex flex-column justify-content-center align-items-center text-center">
            <p>
              <strong>Dirección:</strong> Mz 27 Cs 10 Br Villa Kennedy 2500 Lotes
              Cuba
            </p>
            <p>
              <strong>Teléfono:</strong>{" "}
              <a
                href="https://wa.me/573148110143"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 314 811 0143
              </a>
            </p>
            <p>
              <strong>Correo:</strong> erfamilyboutique@gmail.com
            </p>
            <p>
              <strong>Horario:</strong> Lun a Sáb de 11:00 a 19:00
            </p>
            <img
              src="\images\Logo.png"
              alt="Nuestra boutique"
              className="img-fluid rounded shadow mt-3"
              style={{ width: "220px", height: "220px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoBoutique;
