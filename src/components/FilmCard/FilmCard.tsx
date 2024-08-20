import React, { FC } from 'react';
import styles from './FilmCard.module.css';
import StarIcon from '../icons/StarIcon.js';
import { Maybe } from '../Maybe';
import { FavoriteAction } from '../FavoriteAction';
import { FilmCardProps } from './FilmCard.props';

const DEFAULT_FILM_NAME = 'Название не указано';
const FilmCard: FC<FilmCardProps> = ({
    count,
    poster,
    filmName,
    isFavorites,
}) => {
    return (
        <div className={styles.wrapper}>
            <Maybe when={!!count}>
                <div className={styles.rating}>
                    <StarIcon />
                    <p className={styles.count}>{count}</p>
                </div>
            </Maybe>
            <div className={styles.poster}>
                <img src={poster} alt="poster" />
            </div>
            <div className={styles.title}>
                <p>{filmName || DEFAULT_FILM_NAME}</p>
            </div>
            <FavoriteAction
                isFavorites={isFavorites}
                onClick={console.log}
                id={'storka'}
            />
        </div>
    );
};

export default FilmCard;
