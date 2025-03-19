// src/components/CreateGroup.js
import React, { useState } from 'react';
import api from '../services/api';

const CreateGroup = () => {
    const [groupName, setGroupName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/Groups', { name: groupName });
            alert('Group created successfully!');
        } catch (error) {
            console.error('Group creation failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Group Name</label>
                <input type="text" className="form-control" value={groupName} onChange={(e) => setGroupName(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Create Group</button>
        </form>
    );
};

export default CreateGroup;