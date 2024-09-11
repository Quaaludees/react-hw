import React, { FC } from 'react';
import styles from './GroupItem.module.css';

type GroupItemProps = {
    label: string;
    value?: string;
};
const GroupItem: FC<GroupItemProps> = ({ label, value }) => {
    return (
        <div className={styles.cartFilm}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>{value || '***'}</div>
        </div>
    );
};

export default GroupItem;
