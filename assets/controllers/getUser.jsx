import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/users/api/user');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(true)
            }
        };
        fetchUser();
    }, []);

    return  {user, loading}
}

export default  GetUser;

