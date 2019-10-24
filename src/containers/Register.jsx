import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register () => (
<section className="register">
        <section className="register__container">
            <h2>Regístrate</h2>
            <form action="" className="register__container--form">
                <input className="input" type="text" placeholder="Nombre"/>
                <input className="input" type="text" placeholder="Correo"/>
                <input type="password" className="input" placeholder="Contraseña"/>
                <button className="button">Registrarme</button>
            </form>
            <Link to="/login">Iniciar Sesión</Link>
        </section>
    </section>

);

export default Register;
