import React from "react";

export const Footer = () => {
  /* const {user, isAuthenticated, isLoading} = useAuth0(); */

  return (
    <footer className="page-footer font-small indigo">
        <div className="container text-center text-md-center">
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
                  <a href="#!">Carlos</a>
                </li>
                <li>
                  <a href="#!">Adrián</a>
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
                  <a href="mailto:physaidpinf@gmail.com"><i className="material-icons mdi-2x mail-icon">Email 📩</i></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100077034664587" target="blank"><i className="mdi mdi-facebook facebook mdi-attachment mdi-2x facebook-icon">Facebook &nbsp;<img alt="facebook" src="//cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.svg" data-src="//cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.svg"></img></i></a>
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
