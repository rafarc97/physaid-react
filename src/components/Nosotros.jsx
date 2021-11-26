import React from "react";
import foto1 from "../img/carousel1.jpeg";
import foto2 from "../img/carousel2.jpg";
import foto3 from "../img/carousel3.jpg";

export const Nosotros = () => {

  return (

      <div className="empresa-div">
        <h3>¿ Quiénes Somos ?</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ad nemo labore atque ullam laboriosam, at expedita facilis porro rerum deserunt quos! Dolorem saepe necessitatibus id eius ducimus quaerat quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ad nemo labore atque ullam laboriosam, at expedita facilis porro rerum deserunt quos! Dolorem saepe necessitatibus id eius ducimus quaerat quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ad nemo labore atque ullam laboriosam, at expedita facilis porro rerum deserunt quos! Dolorem saepe necessitatibus id eius ducimus quaerat quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ad nemo labore atque ullam laboriosam, at expedita facilis porro rerum deserunt quos! Dolorem saepe necessitatibus id eius ducimus quaerat quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ad nemo labore atque ullam laboriosam, at expedita facilis porro rerum deserunt quos! Dolorem saepe necessitatibus id eius ducimus quaerat quidem.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

        <div className="img-nosotros-div">
            <img src={foto1} alt="Imagen Consulta 1"/>
            <img src={foto2} alt="Imagen Consulta 2"/>
            <img src={foto3} alt="Imagen Consulta 3"/>
        </div>
    </div>

  );
};
