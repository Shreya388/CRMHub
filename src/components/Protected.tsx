// src/components/Protected.tsx

import React, { useEffect, useState } from 'react';
import { getProtectedData } from '../api';
import { useAuth } from '../context/AuthContext';

const Protected: React.FC = () => {
    const { token } = useAuth();
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                try {
                    const response = await getProtectedData(token);
                    setData(response.data);
                } catch (error) {
                    setData('Access denied');
                }
            };
            fetchData();
        }
    }, [token]);

    return <div>{data ? data : 'Loading...'}</div>;
};

export default Protected;
