import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Label } from 'recharts';
import "../pages/Login.css"

const Login = () => {
    const [form, setForm] = useState({ "email": "", "password": "" });
    const navigate = useNavigate("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/login", form);
            localStorage.setItem("token", res.data.token);
            console.log("token",res.data.token);
            navigate("/dashboard");// successful login -> dashboard

        }
        catch (err) {
            console.log(err.message);
            setError("Login failed. Check credentials.");
        }
    }


    return (
        <div className='login-container'>
            <h2>Login</h2>
            {error && <p className='error'>{error}</p>}

            <form onSubmit={handleSubmit}>
                <Label>Email: </Label>
                <input type="text" name='email' placeholder='enter email' onChange={handleChange} value={form.email} />

                <Label>Password: </Label>
                <input type="password" name='password' placeholder='enter password' onChange={handleChange} value={form.password} />
                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login
