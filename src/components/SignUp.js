// src/components/SignUp.js
import React, { useState } from 'react';
import api from '../services/api';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/Auth/register', { email, password });
            alert('User  registered successfully!');
        } catch (error) {
            console.error('Sign up failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register Page</h1>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
    );
};

export default SignUp;