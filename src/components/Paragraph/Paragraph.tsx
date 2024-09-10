import React, { FC, PropsWithChildren } from 'react';
import styles from './Paragraph.module.css';

const Paragraph: FC<PropsWithChildren> = ({ children }) => {
    return <p className={styles.root}>{children}</p>;
};

export default Paragraph;
