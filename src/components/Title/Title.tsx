import React, { FC, PropsWithChildren } from 'react';
import styles from './Title.module.css';
import { ITitleProps } from './Title.props';

const Title: FC<PropsWithChildren<ITitleProps>> = ({ title }) => {
    return <h1 className={styles.root}>{title}</h1>;
};

export default Title;
