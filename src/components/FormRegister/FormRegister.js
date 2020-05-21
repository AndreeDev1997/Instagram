import React from 'react';
import "./FormRegister.css";

const FormRegister = ({onChange, onSubmit, form}) => (
    <div className="wrapper-form-reg">
        <form className="form" onSubmit={onSubmit}>
            <div class="form-group">
                <input
                    class="form-control" 
                    type="text"
                    placeholder="Número de celular o correo electrónico"
                    required
                    name="account"
                    value={form.account}
                    onChange={onChange}
                />
            </div>
            <div class="form-group">
                <input 
                    class="form-control"
                    type="text"
                    placeholder="Nombre completo"
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                />
            </div>
            <div class="form-group">
                <input
                    class="form-control"
                    type="text"
                    placeholder="Nombre de usuario"
                    required
                    name="username"
                    value={form.username}
                    onChange={onChange}
                />
            </div>
            <div class="form-group">
                <input
                    class="form-control"
                    type="password"
                    placeholder="Contraseña"
                    required
                    name="password"
                    value={form.password}
                    onChange={onChange}
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="btn btn-primary button-form-reg"
                >
                    <strong>Registrarte</strong>
                </button>
            </div>
        </form>
    </div>
)
 
export default FormRegister;