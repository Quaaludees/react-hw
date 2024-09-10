import styles from './HeaderLayout.module.css';
import React, { FC, PropsWithChildren } from 'react';

const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export default HeaderLayout;
