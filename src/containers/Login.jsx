import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/google-icon.png';

const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2>Inicia sesión</h2>
            <form action="" classNames="login__container--form">
                <input className="input" type="text" placeholder="Correo"/>
                <input type="password" className="input" placeholder="Contraseña"/>
                <button className="button">Iniciar sesión</button>
                <div className="login__container--rememberme">
                    <label>
                        <input type="checkbox" id="box1" value="checkbox"/>Recuérdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--socialmedia">
                <div><img src="{googleIcon}" alt="Google"/>Inicia sesión con Google</div>
                <div><img src="{twitterIcon}" alt="Twitter"/>Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">
                No tienes ninguna cuenta 
                <Link to="/register">
                    Regístrate
                </Link>
            </p>
        </section>
    </section>
);

export default Login;
