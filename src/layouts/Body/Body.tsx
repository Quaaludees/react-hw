import React, { FC, PropsWithChildren } from 'react';
import styles from './Body.module.css';

const Body: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export default Body;
