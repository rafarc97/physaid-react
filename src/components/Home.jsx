import React from "react";
import foto1 from "../img/carousel1.jpeg";
import foto2 from "../img/carousel2.jpg";
import foto3 from "../img/carousel3.jpg";

export const Home = () => {
  
    /* let text_src = {foto11};
    console.log(text_src);
    window.addEventListener("resize", function (event) {
      console.log(document.body.clientWidth + " wide by " + document.body.clientHeight + " high");
      if(document.body.clientWidth < 991 ){
        console.log("hola");
        let $carousel1 = document.getElementById("carousel-img-1");
        $carousel1.src = text_src;
      }
    }); */

  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={foto1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={foto2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={foto3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div>
  );
};
