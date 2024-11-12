// src/components/DataList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return (
        <div className="container">
            <h1>Data List</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <Link to={`/data/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/profile" className="button">Go to Profile</Link>
        </div>
    );
};

export default DataList;