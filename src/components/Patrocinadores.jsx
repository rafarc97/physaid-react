import React from "react";
import patrocinador1 from '../img/patrocinador1.jpeg';
import patrocinador2 from '../img/patrocinador2.png';
import patrocinador3 from '../img/patrocinador3.png';
import patrocinador4 from '../img/patrocinador4.jpeg';
import patrocinador5 from '../img/patrocinador5.jpeg';
import patrocinador6 from '../img/patrocinador6.jpeg';
import patrocinador7 from '../img/patrocinador7.jpeg';
import patrocinador8 from '../img/patrocinador8-png.png';



export const Patrocinadores = () => {

  return (
        <div className="patrocinadores-div">
            <h3>
                Nos apoyan:
            </h3>
            
            <div className="patrocinadores-div2">
                <img src={patrocinador1} alt="patrocinador 1"/>
                <img src={patrocinador2} alt="patrocinador 2"/>
                <img src={patrocinador3} alt="patrocinador 3"/>
                <img src={patrocinador4} alt="patrocinador 4"/>
            </div>


            <div className="patrocinadores-div2">
                <img src={patrocinador5} alt="patrocinador 5"/>
                <img src={patrocinador6} alt="patrocinador 6"/>
                <img src={patrocinador7} alt="patrocinador 7"/>
                <img src={patrocinador8} alt="patrocinador 8"/>
            </div>

        </div>
    );
};


