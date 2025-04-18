import React from "react";
import Producto from "./productosDama";

const productos = [
  {
    title: "Camiseta Violeta",
    description: "Camiseta 100% algodón con diseño exclusivo",
    price: 29.99,
    image: "https://via.placeholder.com/300x200?text=Camiseta",
  },
  {
    title: "Gorra Urbana",
    description: "Gorra ajustable con estilo moderno",
    price: 19.99,
    image: "https://via.placeholder.com/300x200?text=Gorra",
  },
  {
    title: "Mochila Deportiva",
    description: "Resistente al agua y con varios compartimientos",
    price: 49.99,
    image: "https://via.placeholder.com/300x200?text=Mochila",
  },
  {
    title: "Camiseta Violeta",
    description: "Camiseta 100% algodón con diseño exclusivo",
    price: 29.99,
    image: "https://via.placeholder.com/300x200?text=Camiseta",
  },
  {
    title: "Gorra Urbana",
    description: "Gorra ajustable con estilo moderno",
    price: 19.99,
    image: "https://via.placeholder.com/300x200?text=Gorra",
  },
  {
    title: "Mochila Deportiva",
    description: "Resistente al agua y con varios compartimientos",
    price: 49.99,
    image: "https://via.placeholder.com/300x200?text=Mochila",
  },
];

const Catalogo = () => {
  return (
    <div className="container my-3">
      <h2 className="mb-4 text-center">Catálogo de Productos</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
        {productos.map((producto, index) => (
          <div key={index} className="col mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
            <Producto {...producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
