import React from "react";
import { Link } from "react-router-dom";

const Producto = ({ image, title, description, link }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={image} className="card-img-top "  style={{ width: "100%", height: "200px", objectFit: "cover" }} alt={title} />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center"}}>{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-center"> 
          <Link to={link} className="btn btn-primary"          style={{
            position: 'relative',
            top: '5px  ',
            bottom: '10px',
          }}>
            Ver productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Producto;
