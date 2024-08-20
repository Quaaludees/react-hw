import { createContext } from 'react';
import { IUser } from './types';

export interface IUserContext {
    isLogin: boolean | null;
    onLogin: ((userName: string) => void) | null;
    onLogout: (() => void) | null;
    user: IUser | null;
}
export const UserContext = createContext<IUserContext>({
    user: null,
    onLogin: null,
    onLogout: null,
    isLogin: null,
});
