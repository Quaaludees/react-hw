import React, { FC, useState } from 'react';
import styles from './ImgWithSkeleton.module.css';
import { Maybe } from '../Maybe';
import Skeleton from '../Skeleton/Skeleton';

type Props = {
    alt: string;
    src: string;
    height: number;
    width: number;
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;
const ImgWithSkeleton: FC<Props> = ({ width, height, alt, ...restProps }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            className={styles.wrapper}
            style={{
                minHeight: height,
                width,
            }}>
            <img
                style={{
                    width,
                }}
                className={!isLoaded ? styles.loadingImg : undefined}
                {...restProps}
                alt={alt}
                onLoad={() => {
                    setIsLoaded(true);
                }}
            />
            <Maybe when={!isLoaded}>
                <div
                    className={styles.posLoader}
                    style={{
                        minHeight: height,
                        width,
                    }}>
                    <Skeleton minHeight={height} borderRadius={24} />
                </div>
            </Maybe>
        </div>
    );
};

export default ImgWithSkeleton;
