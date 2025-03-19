// src/components/GroupList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useSelector } from 'react-redux'; // Import useSelector to access the Redux store

const GroupList = () => {
    const [groups, setGroups] = useState([]);
    const [error, setError] = useState(null); // State for error messages

    const token = useSelector((state) => state.auth.token); // Get the token from the Redux store


    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await api.get('/Groups', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the headers
                    },
                });
                setGroups(response.data);
            } catch (error) {
                console.error('Failed to fetch groups', error);
                setError('Failed to fetch groups. Please check your authentication.'); // Set error message

            }
        };
        fetchGroups();
    }, [token]); // Add token as a dependency to re-fetch if it changes

    return (
        <div>
            {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Group ID</th>
                        <th>Group Name</th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map(group => (
                        <tr key={group.groupId}>
                            <td>{group.groupId}</td>
                            <td>{group.groupName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GroupList;