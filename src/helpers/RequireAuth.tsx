import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
    const { currentUser } = useSelector((s: RootState) => s.user);

    if (!currentUser) {
        return <Navigate to="/auth/login" replace />;
    }
    return children;
};
