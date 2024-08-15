import React from 'react';
import styles from './FavoriteAction.module.css';
import {Button} from '../Button';
import LikeIcon from '../icons/LikeIcon.jsx';
import FavIcon from '../icons/FavIcon.jsx';
import cn from 'classnames';


const FavoriteAction = ({onClick, isFavorites, id}) => {
    return (
        <div className={styles.favAction}>
            <Button onClick={() => onClick(id)} variants={'text'} className={cn({
                [styles.favorites]: isFavorites
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
    );

};

export default FavoriteAction;