import React from 'react';
import './Header.css';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.js';

function Header() {
    return (
        <header className="header">
            <img className="logo" src="/logo.svg" alt="Логотип" />
            <HeaderNavigation />
        </header>
    );
}

export default Header;
