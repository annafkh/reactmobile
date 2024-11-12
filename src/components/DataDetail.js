import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DataDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setData(json));
    }, [id]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="container">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <Link to="/" className="button">Back to List</Link>
        </div>
    );
};

export default DataDetail;