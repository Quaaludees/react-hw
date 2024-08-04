import React from 'react';
import styles from  './FilmCard.module.css';
import {Button} from '../Button';
import StarIcon from '../icons/StarIcon.jsx';
import LikeIcon from '../icons/LikeIcon.jsx';
import FavIcon from '../icons/FavIcon.jsx';
import cn from 'classnames';


const FilmCard = ({count, poster, filmName, isFavorites}) => {
    return <div className={styles.wrapper}>
        <div className={styles.rating}>
            <StarIcon/>
            <p className={styles.count}>{count}</p>
        </div>
        <div className={styles.poster}>
            <img src={poster} alt="poster"/>
        </div>
        <div className={styles.title}><p>{filmName}</p></div>
        <div className={styles.favAction}>
            <Button variants={'text'} className={cn({
                [styles.favorites] : isFavorites
            })}>
                {isFavorites ? <>
                    <FavIcon/>
                    В избранном
                </> : <>
                    <LikeIcon/>
                    В избранное
                </>}
            </Button>
        </div>
    </div>;
};

export default FilmCard;