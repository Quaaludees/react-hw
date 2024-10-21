import React from 'react';
import { useParams } from 'react-router-dom';
import { useFilmByIdQuery } from '../../api';
import styles from './ViewFilm.module.css';
import GroupItem from '../../components/GroupItem/GroupItem';
import StarIcon from '../../components/icons/StarIcon';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { favoritesMovieAction } from '../../store/favorites.slice';
import { FavoriteAction } from '../../components/FavoriteAction';
import { Maybe } from '../../components/Maybe';
import Skeleton from '../../components/Skeleton/Skeleton';
import ImgWithSkeleton from '../../components/ImgWithSkeleton/ImgWithSkeleton';

export const ViewFilm = () => {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading } = useFilmByIdQuery(
        { movie_id: id as string, language: 'ru-Ru' },
        {
            enabled: !!id,
        }
    );

    const { movies } = useSelector((s: RootState) => s.favorites);
    const dispatch = useDispatch<AppDispatch>();
    const { currentUser } = useSelector((s: RootState) => s.user);
    const isFavorites = !!movies.find(el => el.id === data?.id);
    const handleClick = () => {
        if (!data?.id) {
            return;
        }
        if (!isFavorites) {
            dispatch(
                favoritesMovieAction.add({
                    userName: currentUser?.name as string,
                    id: data.id,
                    count: data?.vote_count,
                    poster: `https://image.tmdb.org/t/p/original${data?.poster_path}`,
                    filmName: data?.title,
                })
            );
            return;
        }
        dispatch(
            favoritesMovieAction.delete({
                id: data.id,
                userName: currentUser?.name as string,
            })
        );
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapTitle}>
                <Maybe
                    when={!isLoading}
                    fallback={<Skeleton minHeight={40} borderRadius={8} />}>
                    <div className={styles.title}>{data?.title}</div>
                </Maybe>
            </div>

            <div className={styles.wrap}>
                <div className={styles.posterWrap}>
                    <ImgWithSkeleton
                        src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                        alt="poster"
                        height={720}
                        width={480}
                    />
                </div>
                <div className={styles.cartFilm}>
                    <GroupItem
                        withSkeleton={isLoading}
                        label={'Описание'}
                        value={data?.overview}
                        skeletonProps={{
                            minHeight: 100,
                        }}
                    />
                    <div className={styles.rating}>
                        <div className={styles.popularWrap}>
                            <StarIcon />
                            <div className={styles.rate}>
                                {data?.vote_count}
                            </div>
                        </div>
                        <FavoriteAction
                            isFavorites={isFavorites}
                            onClick={handleClick}
                            id={id as string}
                        />
                    </div>
                    <GroupItem
                        label={'Дата выхода'}
                        withSkeleton={isLoading}
                        value={data?.release_date}
                    />
                    <GroupItem
                        label={'Длительность'}
                        withSkeleton={isLoading}
                        value={`${data?.runtime} мин.`}
                    />
                    <GroupItem
                        label={'Сборы'}
                        withSkeleton={isLoading}
                        value={`${data?.revenue.toLocaleString('ru-RU')} $`}
                    />
                </div>
            </div>
        </div>
    );
};
