// src/pages/GroupDetails.js
import React from 'react';
import ExpenseList from '../components/ExpenseList';

const GroupDetails = () => {
    return (
        <div>
            <h1>Group Details</h1>
            <h2>Expenses</h2>
            <ExpenseList />
        </div>
    );
};

export default GroupDetails;