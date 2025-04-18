import React from "react";

const Producto = ({ image, title, description, price }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <a href="#" className="btn btn-primary"style={{
            position: 'absolute',
            bottom: '5px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
          Comprar
        </a>
      </div>
    </div>
  );
};

export default Producto;
