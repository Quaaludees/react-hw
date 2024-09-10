import React, { FC, MouseEvent } from 'react';
import styles from './FavoriteAction.module.css';
import { Button } from '../Button';
import LikeIcon from '../icons/LikeIcon';
import FavIcon from '../icons/FavIcon';
import cn from 'classnames';
import { IFavoriteActionProps } from './FavoriteAction.props';

const FavoriteAction: FC<IFavoriteActionProps> = ({
    onClick,
    isFavorites,
    id,
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick(id);
    };

    return (
        <div className={styles.favAction}>
            <Button
                onClick={handleClick}
                variants={'text'}
                className={cn({
                    [styles.favorites]: isFavorites,
                })}>
                {isFavorites ? (
                    <>
                        <FavIcon />В избранном
                    </>
                ) : (
                    <>
                        <LikeIcon />В избранное
                    </>
                )}
            </Button>
        </div>
    );
};

export default FavoriteAction;
