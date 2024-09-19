import React, { FC, PropsWithChildren } from 'react';
import styles from './Paragraph.module.css';
import cn from 'classnames';

const Paragraph: FC<
    PropsWithChildren<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLParagraphElement>,
            HTMLParagraphElement
        >
    >
> = ({ children, className, ...restProps }) => {
    return (
        <p className={cn(styles.root, className)} {...restProps}>
            {children}
        </p>
    );
};

export default Paragraph;
