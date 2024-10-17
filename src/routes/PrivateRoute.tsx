import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({children} : PrivateRouteProps) => {
    const { user } = useAuth();

    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return <>{children}</>
}

export default PrivateRoute