import React from "react";

const Producto = ({ image, title, description, price }) => {
  return (
    <div className="card" style={{ width: "20rem", textAlign: "center", position: "relative" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <a href="#" className="btn btn-primary">
          Comprar
        </a>
      </div>
    </div>
  );
};

export default Producto;
