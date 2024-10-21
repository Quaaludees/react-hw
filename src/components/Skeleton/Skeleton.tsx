import React, { FC } from 'react';
import styles from './Skeleton.module.css';

export type SkeletonProps = {
    minHeight: number;
    borderRadius?: number;
};
const Skeleton: FC<SkeletonProps> = ({ minHeight, borderRadius = 8 }) => {
    return (
        <div
            className={styles.root}
            style={{
                minHeight,
                borderRadius,
            }}></div>
    );
};

export default Skeleton;
