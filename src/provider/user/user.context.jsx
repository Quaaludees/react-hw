import {createContext} from 'react';


export const UserContext = createContext({
    user: null,
    onLogin: null,
    onLogout: null,
    isLogin: null
});

