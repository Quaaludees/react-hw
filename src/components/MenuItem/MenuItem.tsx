import React from 'react';
import { item, count as countClassName } from './MenuItem.module.css';
import { FC } from 'react';
import { MenuItemProps } from './MenuItem.props';

const MenuItem: FC<MenuItemProps> = ({
    title,
    count,
    icon,
    onClick,
    isHidden,
}) => {
    if (isHidden) {
        return null;
    }

    return (
        <li className={item as string}>
            <div onClick={onClick} className={item as string}>
                {title}
                {count && (
                    <div className={countClassName as string}>{count}</div>
                )}
                {icon}
            </div>
        </li>
    );
};

export default MenuItem;
