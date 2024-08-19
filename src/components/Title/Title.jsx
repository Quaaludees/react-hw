import React from 'react';
import styles from './Title.module.css';

const Title = ({ title }) => {
    return (
        <h1 className={styles.root}>
            {title}
        </h1>
    );
};

export default Title;