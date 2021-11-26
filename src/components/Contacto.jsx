import React from "react";

export const Contacto = () => {

  return (
    <div className="form-container">
    <form
      action="https://formsubmit.co/rafaelrodriguezcalvente@gmail.com"
      method="POST"
      target="_blank"
    >
      <legend name="contact">
        Escríbenos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📩
      </legend>
      <br />
      <div className="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Intorduce tu nombre"
          required
        />
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Intorduce tu email"
          required
        />
      </div>
      <div className="form-group">
        <label for="mensaje">Texto</label>
        <textarea
          className="form-control"
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark btn-form">Enviar</button>
    </form>
  </div>
    );
};