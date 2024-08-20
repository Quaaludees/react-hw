import React from 'react';
import styles from './SearchFilms.module.css';
import FilmCard from '../FilmCard/FilmCard.jsx';
import { FILMS_DATA } from './constans';
import SearchForm from '../SearchForm/SearchForm.js';
import { Maybe } from '../Maybe';
import { Paragraph } from '../Paragraph';

const SearchFilms = () => {
    const handleClick = (value: string) => {
        console.log(value);
    };

    return (
        <>
            <SearchForm onSubmit={handleClick} />
            <div className={styles.list}>
                <Maybe
                    when={!!FILMS_DATA?.length}
                    fallback={<Paragraph>Упс... Ничего не найдено</Paragraph>}>
                    {FILMS_DATA?.map(
                        ({ filmName, poster, count, isFavorites }, index) => (
                            <FilmCard
                                key={`${filmName}_${index}`}
                                filmName={filmName}
                                poster={poster}
                                isFavorites={isFavorites}
                                count={count}
                            />
                        )
                    )}
                </Maybe>
            </div>
        </>
    );
};

export default SearchFilms;
