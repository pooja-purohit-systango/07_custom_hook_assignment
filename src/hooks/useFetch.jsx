import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (DATA_URL) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(DATA_URL);
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setError(error.message)
            }
            setLoading(false);
        };

        fetchData();
    }, [DATA_URL]); 

    return { data, loading , error}; 
};

export default useFetch;
