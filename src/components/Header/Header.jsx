import styles from './Header.module.css';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx';
import LoginIcon from '../icons/LoginIcon.jsx';
import UserIcon from '../icons/UserIcon.jsx';
import {useUserContext} from '../../provider/user/index.js';



const Header = () => {


    const handleClick = (path) => () => {
        console.log(path);
    };
    const {user, onLogout} = useUserContext();
    
    const menuItems = [
        { onClick: handleClick('search'), title: 'Поиск фильмов' },
        { onClick: handleClick('fav'), title: 'Мои фильмы', count: 2, isHidden: !user },
        { onClick: handleClick('profile'), title: user?.name, icon: <UserIcon />, isHidden: !user },
        { onClick: onLogout, title: user ? 'Выйти' : 'Войти' , icon: <LoginIcon /> }

    ];


    return (
        <header className={styles.header}>
            <img className='logo' src="/logo.svg" alt="Логотип"/>
            <HeaderNavigation menuItems={menuItems}/>
        </header>
    );
};

export default Header;