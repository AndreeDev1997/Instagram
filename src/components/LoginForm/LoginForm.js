import React from "react";

import "./LoginForm.css";

const LoginForm = () => (
  <div className="wrFrm-lgFrm">
    <form className="form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Correo o teléfono"
        />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Contraseña" />
      </div>
      <button type="submit" className="btn btn-primary btn-lgFrm">
        <strong>Iniciar Sesión</strong>
      </button>
    </form>
  </div>
);

export default LoginForm;
