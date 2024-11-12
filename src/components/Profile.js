// src/components/Profile.js
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="container">
            <h1>User Profile</h1>
            <p><strong>Name:</strong> Muhammad Annafi</p>
            <p><strong>Email:</strong> annafi@gmail.com</p>
            <p><strong>Bio:</strong> Mobile Developer</p>
            <Link to="/" className="button">Back to List</Link>
        </div>
    );
};

export default Profile;