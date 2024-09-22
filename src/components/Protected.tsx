import React, { useEffect, useState } from 'react';
import { getProtectedData } from '../api';
import Home from '../pages/Home';

const ProtectedPage: React.FC = () => {
    const [data, setData] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProtectedData(token);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching protected data:', error);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    return (
        <div>
            <h1>Protected Data</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <Home />}
        </div>
    );
};

export default ProtectedPage;
