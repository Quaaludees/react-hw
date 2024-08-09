
import {useLocalStorage} from '../../hooks/useLocalstorage.hook.js';
import {UserContext} from './user.context.jsx';




export const UserContextProvider = ({children}) => {


    const [users = [], setUsers] = useLocalStorage('user');

    const currentUser = users.find(el => el.isLogin);

    const handleLogin = (userName) => {
        const user = users?.find((el) => el.name === userName);
        if (!user) {
            setUsers([
                ...users.map(el => ({
                    ...el,
                    isLogin: false
                })),
                {
                    name: userName,
                    isLogin: true
                }
            ]);
            return;
        }
        setUsers(users.map((el) => {
            if (el.name === userName) {
                return {
                    ...el,
                    isLogin: true
                };
            }
            return {
                ...el,
                isLogin: false
            };
        }));
    };

    const handleLogout = () => {
        setUsers(users.map(el => {
            if (el.name === currentUser.name) {
                return {
                    ...el,
                    isLogin: false
                };
            }
            return el;
        }));
    };

    return <UserContext.Provider value={{user: currentUser, onLogin: handleLogin, onLogout: handleLogout}} >
        {children}
    </UserContext.Provider>;
};