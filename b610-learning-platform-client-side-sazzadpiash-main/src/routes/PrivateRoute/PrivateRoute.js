import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { OuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(OuthContext);
    console.log(user)
    if (loading) {
        return (
            <div className='text-center pt-5'>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    else {
        return children
    }
};

export default PrivateRoute;