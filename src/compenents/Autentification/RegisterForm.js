import React, { useState } from 'react';
import axios from "axios";
import './A.css';
import {NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        gmail: '',
        firstname: '',
        lastname: '',
        avatar: '',
        gender: '', // Assuming you want to store gender as a string, not boolean
        date: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/home/users', formData);
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate('/login');
            alert("Successful");
            // Redirect or do something after successful login
        } catch (error) {
            console.error('Login failed', error);
        }
        console.log(formData);
        // You can add your Axios or Fetch request here to send the data to the backend
    };

    return (

        <div className="Glavny_block">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="gmail"
                placeholder="Gmail"
                value={formData.gmail}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="avatar"
                placeholder="Avatar URL"
                value={formData.avatar}
                onChange={handleChange}
            />
            <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
            >
                <option value="">Select Gender</option>
                <option value={true}>Male</option>
                <option value={false}>Female</option>
            </select>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Register</button>
            <br></br><NavLink to="/login">Back</NavLink><br></br>
        </form>
        </div>
    );
}

export default RegistrationForm;
