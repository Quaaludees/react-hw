import React, { FC, PropsWithChildren } from 'react';
import styles from './Body.module.css';
import { IBodyProps } from './Body.props';

const Body: FC<PropsWithChildren<IBodyProps>> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export default Body;
