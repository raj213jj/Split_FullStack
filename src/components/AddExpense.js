// src/components/AddExpense.js
import React, { useState } from 'react';
import api from '../services/api';

const AddExpense = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [groupId, setGroupId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/Expenses', { amount, description, groupId });
            alert('Expense added successfully!');
        } catch (error) {
            console.error('Expense addition failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Amount</label>
                <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Group ID</label>
                <input type="text" className="form-control" value={groupId} onChange={(e) => setGroupId(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Expense</button>
        </form>
    );
};

export default AddExpense;