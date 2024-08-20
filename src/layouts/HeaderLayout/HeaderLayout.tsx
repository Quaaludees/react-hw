import styles from './HeaderLayout.module.css';
import React, { FC, PropsWithChildren } from 'react';
import { IHeaderLayoutProps } from './HeaderLayout.props';

const HeaderLayout: FC<PropsWithChildren<IHeaderLayoutProps>> = ({
    children,
}) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export default HeaderLayout;
