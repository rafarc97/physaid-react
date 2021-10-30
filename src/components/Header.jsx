import React from "react";
import logo from '../icon.png';
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const { logout } = useAuth0();

  return (
    <header className="header">
      <h2 className="logo">
        <a className="logo_a" href="./">
          <img className="icon-x2" src={logo} alt="physaid-logo" />
          <span>Physaid</span>
        </a>
      </h2>

      <nav className="nav">
        <a href="proyectos/proyectos.html"> Nosotros </a>
        <a href="cv/cv.html"> Testimonios </a>
        <a href="ahora/ahora.html"> Recursos </a>
        <a href="contacto/contacto.html"> Contacto </a>
        <button onClick={() => logout({ returnTo: window.location.origin})}> Logout </button>
      </nav>
    </header>
  );
};
