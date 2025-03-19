// src/components/Login.js
import React, { useState } from 'react';
import api from '../services/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State for error messages
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state before making the request
        try {
            const response = await api.post('/Auth/login', { email, password });
            dispatch({ type: 'LOGIN', payload: response.data });
            navigate('/dashboard'); // Navigate to dashboard on successful login
        } catch (error) {
            console.error('Login failed', error);
            setError('Login failed. Please check your credentials.'); // Set error message
        }
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            {error && <div className="alert alert-danger mt-2">{error}</div>} {/* Display error message */}
            <p>
                Don't have an account? <a href="/signup">Register here</a>
            </p>
        </form>
    );
};

export default Login;