import React from 'react';
import { useParams } from 'react-router-dom';
import { useFilmByIdQuery } from '../../api';
import styles from './ViewFilm.module.css';
import LikeIcon from '../../components/icons/LikeIcon';
import { Button } from '../../components';
import GroupItem from '../../components/GroupItem/GroupItem';
import StarIcon from '../../components/icons/StarIcon';

export const ViewFilm = () => {
    const { id } = useParams();

    const { data } = useFilmByIdQuery(
        { movie_id: id as string, language: 'ru-Ru' },
        {
            enabled: !!id,
        }
    );

    console.log(data, 'data');
    return (
        <div className={styles.container}>
            <div className={styles.wrapTitle}>
                <div className={styles.title}>{data?.title}</div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.posterWrap}>
                    <img
                        className={styles.poster}
                        src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                        alt="brbrbrbr"
                    />
                </div>
                <div className={styles.cartFilm}>
                    <GroupItem label={'Описание'} value={data?.overview} />
                    <div className={styles.rating}>
                        <div className={styles.popularWrap}>
                            <StarIcon />
                            <div className={styles.rate}>
                                {data?.vote_count}
                            </div>
                        </div>
                        <Button variants={'text'} className={styles.fav}>
                            <LikeIcon />В избранное
                        </Button>
                    </div>
                    <GroupItem
                        label={'Дата выхода'}
                        value={data?.release_date}
                    />
                    <GroupItem
                        label={'Длительность'}
                        value={`${data?.runtime} мин.`}
                    />
                    <GroupItem label={'Сборы'} value={`${data?.revenue} $`} />
                </div>
            </div>
        </div>
    );
};
