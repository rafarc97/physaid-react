import React from "react";

export const Footer = () => {
  /* const {user, isAuthenticated, isLoading} = useAuth0(); */

  return (
    <footer className="page-footer font-small indigo">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4 footer-titles"><a className="nosotros" href="nosotros">Nosotros</a></h6>
  
              <ul className="list-unstyled">
              <li>
                  <a href="nosotros">Quienes Somos</a>
                </li> 
                 <li>
                  <a href="empresa">Empresa</a>
                </li> 
                <li>
                  <a href="patrocinadores">Patrocinadores</a>
                </li>
              </ul>
            </div>
  
            <hr className="clearfix w-100 d-md-none" />
  
            <div className="col-md-3 mx-auto">
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4 footer-titles"><a href="testimonios">Testimonios</a></h6>
  
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Rosalía</a>
                </li>
                <li>
                  <a href="#!">Bryan</a>
                </li>
                <li>
                  <a href="#!">Maeve</a>
                </li>
                <li>
                  <a href="#!">Y más !</a>
                </li>
              </ul>
            </div>
  
            <hr className="clearfix w-100 d-md-none" />
  
            <div className="col-md-3 mx-auto">
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4 footer-titles"><a href="recursos">Recursos</a></h6>
  
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Vídeos</a>
                </li>
                <li>
                  <a href="#!">Documentos</a>
                </li>
                <li>
                  <a href="#!">Imágenes</a>
                </li>
                <li>
                  <a href="#!">Links</a>
                </li>
              </ul>
            </div>
  
            <hr className="clearfix w-100 d-md-none" />
  
            <div className="col-md-3 mx-auto">
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4 footer-titles"><a className="contacto" href="/contacto">CONTACTO</a></h6>
  
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:physaidd@gmail.com"><i className="material-icons mdi-2x mail-icon">mail</i></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100074198019550" target="blank"><i className="mdi mdi-facebook mdi-attachment mdi-2x facebook-icon"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="footer-copyright text-center py-3">
          <a href="/">© 2021 Copyright: PhysAid</a>
        </div>
      </footer>
  );
};
