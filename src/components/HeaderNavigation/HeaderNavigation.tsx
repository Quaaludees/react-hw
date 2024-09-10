import React, { FC } from 'react';
import styles from './HeaderNavigation.module.css';
import MenuItem from '../MenuItem/MenuItem.js';
import { MenuItemProps } from '../MenuItem';

type Props = {
    menuItems: MenuItemProps[];
};
const HeaderNavigation: FC<Props> = ({ menuItems }) => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {menuItems.map(
                    ({ to, title, count, icon, onClick, isHidden }, index) => {
                        return (
                            <MenuItem
                                to={to}
                                key={`${title}_${index}`}
                                title={title}
                                count={count}
                                icon={icon}
                                onClick={onClick}
                                isHidden={isHidden}
                            />
                        );
                    }
                )}
            </ul>
        </nav>
    );
};

export default HeaderNavigation;
