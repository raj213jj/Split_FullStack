// src/pages/Dashboard.js
import React from 'react';
import GroupList from '../components/GroupList';
import AddExpense from '../components/AddExpense';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Your Groups</h2>
            <GroupList />
            <h2>Add Expense</h2>
            <AddExpense />
        </div>
    );
};

export default Dashboard;