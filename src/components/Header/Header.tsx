import React from 'react';
import styles from './Header.module.css';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx';
import LoginIcon from '../icons/LoginIcon.js';
import UserIcon from '../icons/UserIcon.js';
import { useUserContext } from '../../provider/user';

const Header = () => {
    const handleClick = (path: string) => () => {
        console.log(path);
    };
    const { user, onLogout, isLogin } = useUserContext();

    const menuItems = [
        { onClick: handleClick('search'), title: 'Поиск фильмов' },
        {
            onClick: handleClick('fav'),
            title: 'Мои фильмы',
            count: 2,
            isHidden: !isLogin,
        },
        {
            onClick: handleClick('profile'),
            title: user?.name || '',
            icon: <UserIcon />,
            isHidden: !isLogin,
        },
        {
            onClick: isLogin ? () => onLogout?.() : handleClick('auth'),
            title: isLogin ? 'Выйти' : 'Войти',
            icon: <LoginIcon />,
        },
    ];

    return (
        <header className={styles.header}>
            <img className="logo" src="/logo.svg" alt="Логотип" />
            <HeaderNavigation menuItems={menuItems} />
        </header>
    );
};

export default Header;
