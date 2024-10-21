import React, { useEffect } from 'react';
import styles from './Header.module.css';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx';
import LoginIcon from '../icons/LoginIcon.js';
import UserIcon from '../icons/UserIcon.js';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userAction } from '../../store/user.slice';
import { favoritesMovieAction } from '../../store/favorites.slice';

const Header = () => {
    const { currentUser } = useSelector((s: RootState) => s.user);

    const { movies } = useSelector((s: RootState) => s.favorites);

    const dispatch = useDispatch<AppDispatch>();

    const menuItems = [
        { title: 'Поиск фильмов', to: '/' },
        {
            to: '/favorites',
            title: 'Мои фильмы',
            count: movies.length,
            isHidden: !currentUser,
        },
        {
            to: '/',
            title: currentUser?.name || '',
            icon: <UserIcon />,
            isHidden: !currentUser,
        },
        {
            to: '/auth/login',
            onClick: currentUser
                ? () => dispatch(userAction.logout())
                : undefined,
            title: currentUser ? 'Выйти' : 'Войти',
            icon: <LoginIcon />,
        },
    ];

    useEffect(() => {
        dispatch(favoritesMovieAction.initData(currentUser?.name));
    }, []);

    return (
        <header className={styles.header}>
            <img className="logo" src="/logo.svg" alt="Логотип" />
            <HeaderNavigation menuItems={menuItems} />
        </header>
    );
};

export default Header;
