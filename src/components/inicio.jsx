import React from "react";

const Inicio = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Bienvenidos a E&R Family Fashion Boutique</h1>
      <p className="text-center">
        Explora nuestra colección de moda única y exclusiva, somos un emprendimiento 100% Colombiano,
        queremos que seas parte de nuestra familia. Aquí encontrarás prendas de alta calidad y estilo, perfectas para cualquier ocasión.
      </p>
      <div
        id="myCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ margin: "0 auto", maxHeight: "500px", maxWidth: "500px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/categorieDama.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/categorieCaballero.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images\accesorios.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>

        <div>
          {/* Controles */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
