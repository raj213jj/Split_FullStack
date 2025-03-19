// src/components/ExpenseList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await api.get('/Expenses');
                setExpenses(response.data);
            } catch (error) {
                console.error('Failed to fetch expenses', error);
            }
        };
        fetchExpenses();
    }, []);

    return (
        <ul className="list-group">
            {expenses.map(expense => (
                <li key={expense.id} className="list-group-item">
                    {expense.description}: ${expense.amount} (Group ID: {expense.groupId})
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;