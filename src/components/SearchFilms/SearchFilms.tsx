import React, { useState } from 'react';
import styles from './SearchFilms.module.css';
import FilmCard from '../FilmCard/FilmCard.jsx';
import SearchForm from '../SearchForm/SearchForm.js';
import { Maybe } from '../Maybe';
import { Paragraph } from '../Paragraph';
import { useFilmsPopularQuery, useFilmsSearchQuery } from '../../api';
import { Loader } from '../Loader';

const SearchFilms = () => {
    const [query, setQuery] = useState('');

    const {
        data: { results } = {},
        isFetching,
        status,
    } = useFilmsSearchQuery(
        {
            page: 1,
            language: 'ru-RU',
            query,
        },
        {
            select: data => ({
                ...data,
                results: data.results.map(el => ({
                    id: el.id,
                    filmName: el.title,
                    poster: `https://image.tmdb.org/t/p/original${el.poster_path}`,
                    isFavorites: false,
                    count: el.vote_count,
                })),
            }),
            enabled: !!query,
        }
    );

    const {
        data: { results: resultsPopular } = {},
        isFetching: isFetchingPopular,
    } = useFilmsPopularQuery(
        {
            page: 1,
            language: 'ru-RU',
        },
        {
            select: data => ({
                ...data,
                results: data.results.map(el => ({
                    id: el.id,
                    filmName: el.title,
                    poster: `https://image.tmdb.org/t/p/original${el.poster_path}`,
                    isFavorites: false,
                    count: el.vote_count,
                })),
            }),
        }
    );

    const handleClick = (value: string) => {
        setQuery(value);
    };
    return (
        <>
            <SearchForm onSubmit={handleClick} />
            <div className={styles.list}>
                <Maybe when={results?.length === 0}>
                    <Paragraph>
                        Упс... Ничего не найдено. Попробуйте изменить запрос или
                        ввести более точное название фильма
                    </Paragraph>
                </Maybe>
                <Maybe
                    when={!!results?.length && !isFetching}
                    fallback={
                        <Maybe when={isFetching}>
                            {' '}
                            <Loader />{' '}
                        </Maybe>
                    }>
                    {results?.map(film => <FilmCard key={film.id} {...film} />)}
                </Maybe>
                <Maybe when={status === 'idle'}>
                    <Maybe
                        when={!!resultsPopular?.length && !isFetchingPopular}
                        fallback={
                            <Maybe when={isFetchingPopular}>
                                <Loader />
                            </Maybe>
                        }>
                        {resultsPopular?.map(film => (
                            <FilmCard key={film.id} {...film} />
                        ))}
                    </Maybe>
                </Maybe>
            </div>
        </>
    );
};

export default SearchFilms;
