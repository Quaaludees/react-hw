import React, { MouseEvent } from 'react';
import styles from './MenuItem.module.css';
import { FC } from 'react';
import { MenuItemProps } from './MenuItem.props';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const MenuItem: FC<MenuItemProps> = ({
    to = '/',
    title,
    count,
    icon,
    onClick,
    isHidden,
}) => {
    if (isHidden) {
        return null;
    }

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <li className={styles['item']}>
            <NavLink
                onClick={handleClick}
                to={to}
                className={({ isActive }) =>
                    cn(styles['item'], {
                        [styles.active]: isActive,
                    })
                }>
                {title}
                {!!count && <div className={styles['count']}>{count}</div>}
                {icon}
            </NavLink>
        </li>
    );
};

export default MenuItem;
