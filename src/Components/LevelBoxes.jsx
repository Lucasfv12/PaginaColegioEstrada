import React from "react";
import {
  FaGraduationCap,
  FaChurch,
  FaTree,
  FaBook,
  FaPaintBrush,
  FaIceCream,
} from "react-icons/fa";
import "../styles/LevelBoxes.scss";

const LevelBoxes = () => {
  return (
    <div>
      <div className="level-boxes">
        <div className="box">
          <FaPaintBrush className="logo" />
          <a className="titulo-box">NIVEL INICIAL</a>
          <button className="circle-button">+</button>
        </div>
        <div className="box">
          <FaBook className="logo" />
          <a className="titulo-box">NIVEL PRIMARIO</a>
          <button className="circle-button">+</button>
        </div>
        <div className="box">
          <FaGraduationCap className="logo" />
          <a className="titulo-box">NIVEL SECUNDARIO</a>
          <button className="circle-button">+</button>
        </div>
      </div>

      <div className="level-boxes">
        <div className="box">
          <FaChurch className="logo" />
          <a className="titulo-box">PASTORAL</a>
          <button className="circle-button">+</button>
        </div>
        <div className="box">
          <FaIceCream className="logo" />
          <a className="titulo-box">PATIN</a>
          <button className="circle-button">+</button>
        </div>
        <div className="box">
          <FaTree className="logo" />
          <a className="titulo-box">CAMPO DE DEPORTES</a>
          <button className="circle-button">+</button>
        </div>
      </div>
    </div>
  );
};

export default LevelBoxes;
