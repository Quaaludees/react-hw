import React from 'react';
import './FilmCard.css';
import {Button} from "../Button";
import StarIcon from "../icons/StarIcon.jsx";
import LikeIcon from "../icons/LikeIcon.jsx";
import FavIcon from "../icons/FavIcon.jsx";


const FilmCard = ({count, poster, filmName, isFavorites}) => {
    return <div className='film-card__wrapper'>
        <div className='film-card__rating'>
            <StarIcon/>
            <p className='film-card__count'>{count}</p>
        </div>
        <div className='film-card__poster'>
            <img src={poster} alt="poster"/>
        </div>
        <div className='film-card__title'><p>{filmName}</p></div>
        <div className='film-card__fav-action'>
            <Button variants={'text'} className={isFavorites ? 'favorites' : undefined}>
                {isFavorites ? <>
                    <FavIcon/>
                    В избраном
                </> : <>
                    <LikeIcon/>
                    В избранное
                </>}
            </Button>
        </div>
    </div>
};

export default FilmCard;