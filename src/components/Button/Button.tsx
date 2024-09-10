import React, { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    onClick,
    type = 'button',
    variants = 'button',
    className = '',
}) => {
    return (
        <button
            className={cn(className, {
                [styles.button]: variants === 'button',
                [styles.text]: variants === 'text',
            })}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
