import React, { FC, PropsWithChildren } from 'react';
import { useLocalStorage } from '../../hooks/useLocalstorage.hook';
import { UserContext } from './user.context';
import { IUser } from './types';

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [users = [], setUsers] = useLocalStorage<IUser[]>('user');

    const currentUser = users.find(el => el.isLogin);

    const isLogin = !!currentUser;

    const handleLogin = (userName: string, cb?: () => void) => {
        const user = users?.find(el => el.name === userName);
        if (!user) {
            setUsers([
                ...users.map(el => ({
                    ...el,
                    isLogin: false,
                })),
                {
                    name: userName,
                    isLogin: true,
                },
            ]);
            return;
        }
        setUsers(
            users.map(el => {
                if (el.name === userName) {
                    return {
                        ...el,
                        isLogin: true,
                    };
                }
                return {
                    ...el,
                    isLogin: false,
                };
            })
        );
        cb?.();
    };

    const handleLogout = () => {
        setUsers(
            users.map(el => {
                if (el.name === currentUser?.name) {
                    return {
                        ...el,
                        isLogin: false,
                    };
                }
                return el;
            })
        );
    };

    return (
        <UserContext.Provider
            value={{
                user: currentUser || null,
                onLogin: handleLogin,
                onLogout: handleLogout,
                isLogin,
            }}>
            {children}
        </UserContext.Provider>
    );
};
