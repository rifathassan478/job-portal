import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authcontext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(!user){
        return <Navigate to="/login" state={location.pathname} replace></Navigate>
    }
    
    return children;
};

export default PrivateRouter;