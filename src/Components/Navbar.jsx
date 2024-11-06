import React from "react";
import "../styles/NavBar.scss"; // Asegúrate de que estás importando el archivo de estilos

const NavBar = ({ className }) => {
  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-brand"></div>
      <ul className="navbar-links">
        <li>
          <a href="#institucional">Institucional</a>
        </li>
        <li>
          <a href="#administracion">Administración</a>
        </li>
        <li>
          <a href="#niveles-educativos">Niveles Educativos</a>
        </li>
        <li>
          <a href="#pastoral">Pastoral</a>
        </li>
        <li>
          <a href="#contactos">Contactos</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
