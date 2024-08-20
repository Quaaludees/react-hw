import React from 'react';
import styles from './Body.module.css';

const Body = ({ children }) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default Body;