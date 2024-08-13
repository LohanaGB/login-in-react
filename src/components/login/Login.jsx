import React from 'react';
import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';
// import s from './Login.css';

const Login = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=> {
        //preventDefault() impede um evento padrão de ser executado, por exemplo, ao submeter um formulário de carregar a página automaticamente
        e.preventDefault();

        alert(`Enviando os dados: ${username} - ${password}`);
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>

            <div>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    onChange={(e)=> setUserName(e.target.value)}
                />
                <FaUser className="icon" />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e)=> setPassword(e.target.value)}
                /> 
                <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="#">Registrar</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login;
