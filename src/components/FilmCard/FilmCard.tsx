import React, { FC, useState } from 'react';
import styles from './FilmCard.module.css';
import StarIcon from '../icons/StarIcon.js';
import { Maybe } from '../Maybe';
import { FavoriteAction } from '../FavoriteAction';
import { FilmCardProps } from './FilmCard.props';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { favoritesMovieAction } from '../../store/favorites.slice';

const DEFAULT_FILM_NAME = 'Название не указано';
const FilmCard: FC<FilmCardProps> = ({ id, count, poster, filmName }) => {
    const { movies } = useSelector((s: RootState) => s.favorites);
    const { currentUser } = useSelector((s: RootState) => s.user);
    const dispatch = useDispatch<AppDispatch>();
    const isFavorites = !!movies.find(el => el.id === id);

    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/film/${id}`);
    };

    const handleClick = (id: string | number) => {
        if (!isFavorites) {
            dispatch(
                favoritesMovieAction.add({
                    id,
                    count,
                    poster,
                    filmName,
                    userName: currentUser?.name as string,
                })
            );
            return;
        }
        dispatch(
            favoritesMovieAction.delete({
                userName: currentUser?.name as string,
                id,
            })
        );
    };

    return (
        <div onClick={handleNavigate} className={styles.wrapper}>
            <Maybe when={!!count}>
                <div className={styles.rating}>
                    <StarIcon />
                    <p className={styles.count}>{count}</p>
                </div>
            </Maybe>
            <div className={styles.poster}>
                <img
                    className={!isLoaded ? styles.loadingImg : undefined}
                    src={poster}
                    alt="poster"
                    onLoad={() => {
                        setIsLoaded(true);
                    }}
                />
                <Maybe when={!isLoaded}>
                    <div className={styles.posLoader}>
                        <Loader />
                    </div>
                </Maybe>
            </div>
            <div className={styles.title}>
                <p>{filmName || DEFAULT_FILM_NAME}</p>
            </div>
            <FavoriteAction
                isFavorites={isFavorites}
                onClick={handleClick}
                id={id}
            />
        </div>
    );
};

export default FilmCard;
