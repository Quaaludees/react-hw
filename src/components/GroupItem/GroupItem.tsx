import React, { FC } from 'react';
import styles from './GroupItem.module.css';
import { Maybe } from '../Maybe';
import Skeleton, { SkeletonProps } from '../Skeleton/Skeleton';

type GroupItemProps = {
    label: string;
    value?: string;
    withSkeleton?: boolean;
    skeletonProps?: SkeletonProps;
};
const GroupItem: FC<GroupItemProps> = ({
    label,
    value,
    withSkeleton,
    skeletonProps,
}) => {
    return (
        <div className={styles.cartFilm}>
            <div className={styles.label}>{label}</div>
            <Maybe
                when={!withSkeleton}
                fallback={<Skeleton minHeight={30} {...skeletonProps} />}>
                <div className={styles.value}>{value || '***'}</div>
            </Maybe>
        </div>
    );
};

export default GroupItem;
