import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./components/navBar";
import Inicio from "./components/inicio";
import Categories from "./components/Categories";
import CatalogoDama from "./components/catalogoDama";
import CatalogoCaballero from "./components/catalogoCaballero";
import Contacto from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/ropa-dama" element={<CatalogoDama />} />
        <Route path="/ropa-caballero" element={<CatalogoCaballero />} />
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
