import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
    const [gmail, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8081/home/users', {
                gmail,
                password
            });

            const userData = response.data;

            navigate('/profil');
        } catch (error) {
            console.error('Ошибка при входе:', error);
        }
    };

    return (
        <div className="Glavny_block">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={gmail}
                       onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                <br/><NavLink to="/register">Register</NavLink><br/>
            </form>
        </div>
    );
};
