import React from 'react';
import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';
import S from './Login.module.scss';

const Login = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=> {
        //preventDefault() impede um evento padrão de ser executado, por exemplo, ao submeter um formulário de carregar a página automaticamente
        e.preventDefault();

        alert(`Enviando os dados: ${username} - ${password}`);
    }

  return (
    <div className={S.container}>
        <form onSubmit={handleSubmit}>
            <h1 className={S.h1}>Acesse o sistema</h1>

            <div className={S.container__inputField}>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    onChange={(e)=> setUserName(e.target.value)}
                />
                <FaUser className={S.container__inputField__icon} />
            </div>
            <div className={S.container__inputField}>
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e)=> setPassword(e.target.value)}
                /> 
                <FaLock className={S.container__inputField__icon} />
            </div>

            <div className={S.container__recallForget}>
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className={S.container__signupLink}>
                <p>
                    Não tem uma conta? <a href="#">Registrar</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login;
