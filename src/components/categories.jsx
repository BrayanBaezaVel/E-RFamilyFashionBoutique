import React from "react";
import Producto from "./producto";

const categories = [
  {
    title: "Ropa Dama",
    image: "/images/categorieDama.jpg",
    link: "/ropa-dama",
  },
  {
    title: "Ropa Caballero",
    image: "/images/categorieCaballero.jpg",
    link: "/ropa-caballero",
  },
  {
    title: "Accesorios",
    image: "/images/accesorios.jpg",
    link: "/accesories",
  }
];

const Categories = () => {
  return (
    <div className="container my-3">
      <h2 className="mb-4 text-center">Categorías</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map((item, index) => (
          <div key={index} className="col d-flex justify-content-center">
            <Producto {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
