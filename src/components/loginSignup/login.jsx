import React, { useState } from "react";
import './estiloLogin.css';

import ram from "./conex"

const Login = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleLogin = async () => {
        try {
           const response = ram(email, password)
              console.log(response)
        } catch (error) {
            console.error('Error en la solicitud:', error);
            
        }
        
    };

    return (
        <div className='container'> 
            <div className='header'>
                <div className='text'>Login</div>
                <div className="underline"></div>
            </div>      
            <div className="inputs">
                <div className='input'>
                    <img src="" alt="" />
                    <input type="email" placeholder='Email' value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='input'>
                    <img src="" alt="" />
                    <input type="password" placeholder='Password' value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button onClick={async () => {
                    try {
                        await handleLogin();
                        // Haz algo después de que el usuario se haya conectado, si es necesario
                    } catch (error) {
                        // Maneja el error, si es necesario
                    }
                }}>Iniciar Sesión</button>
            </div>
        </div>
    );
}

export default Login;

