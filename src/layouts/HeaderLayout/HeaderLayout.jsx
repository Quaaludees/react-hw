import React from 'react';
import './HeaderLayout.css';

function HeaderLayout({ children }) {
    return <div className="header-wrapper">{children}</div>;
}

export default HeaderLayout;
