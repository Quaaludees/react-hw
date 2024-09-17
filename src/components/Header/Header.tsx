import React from 'react';
import styles from './Header.module.css';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx';
import LoginIcon from '../icons/LoginIcon.js';
import UserIcon from '../icons/UserIcon.js';
import { useUserContext } from '../../provider/user';

const Header = () => {
    const { user, onLogout, isLogin } = useUserContext();

    const menuItems = [
        { title: 'Поиск фильмов', to: '/' },
        {
            to: '/favorites',
            title: 'Мои фильмы',
            count: 2,
            isHidden: !isLogin,
        },
        {
            to: '/',
            //TODO: Profilya nema
            title: user?.name || '',
            icon: <UserIcon />,
            isHidden: !isLogin,
        },
        {
            to: '/auth/login',
            onClick: isLogin ? () => onLogout?.() : undefined,
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
