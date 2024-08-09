import styles from './Header.module.css';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx';
import LoginIcon from '../icons/LoginIcon.jsx';
import UserIcon from '../icons/UserIcon.jsx';
import {useUserContext} from '../../provider/user/index.js';



const Header = () => {
    
    const {user, onLogout} = useUserContext();
    
    const menuItems = [
        { href: '#', title: 'Поиск фильмов' },
        { href: '#', title: 'Мои фильмы', count: 2, isHidden: !user },
        { href: '#', title: user?.name, icon: <UserIcon />, isHidden: !user },
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