import React, { FC, PropsWithChildren } from 'react';
import './Button.css';
import { ButtonProps } from './Button.props';

const variantsMaps: Record<string, string> = {
    button: 'button',
    text: 'button-text',
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    onClick,
    type = 'button',
    variants = 'button',
    className = '',
}) => {
    return (
        <button
            className={[variantsMaps[variants], className].join(' ')}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
