import React from 'react';
import {Link } from "react-router-dom"
const ErrorPage = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl font-bold mb-4">Opps</h1>
            <Link to="/"><button className="btn font-bold">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;