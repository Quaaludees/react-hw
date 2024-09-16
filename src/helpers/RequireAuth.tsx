import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../provider/user';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
    const { isLogin } = useUserContext();
    if (!isLogin) {
        return <Navigate to="/auth/login" replace />;
    }
    return children;
};
