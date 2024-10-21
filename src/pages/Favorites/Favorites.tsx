import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Maybe } from '../../components/Maybe';
import FilmCard from '../../components/FilmCard/FilmCard';
import styles from '../../components/SearchFilms/SearchFilms.module.css';
import { Paragraph, Title } from '../../components';
import cn from 'classnames';

export const Favorites = () => {
    const { movies } = useSelector((s: RootState) => s.favorites);
    return (
        <div>
            <Title title="Избранное" />
            <Maybe
                when={!!movies?.length}
                fallback={
                    <Paragraph className={cn(styles.centre, styles.title)}>
                        Список пуст
                    </Paragraph>
                }>
                <div className={styles.list}>
                    {movies?.map(film => <FilmCard key={film.id} {...film} />)}
                </div>
            </Maybe>
        </div>
    );
};
