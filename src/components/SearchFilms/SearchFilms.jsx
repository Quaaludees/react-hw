import {useState} from "react";
import {Title} from "../Title/index.js";
import {Paragraph} from "../Paragraph/index.js";
import Input from "../Input/Input.jsx";
import {Button} from "../Button/index.js";
import './SearchFilms.css';
import FilmCard from "../FilmCard/FilmCard.jsx";
import {FILMS_DATA, TEXT_CONTENT} from "./constans";



function SearchFilms() {
    const handleClick = () => {
        console.log(inputData);
    };
    const [inputData, setInputData] = useState('');


    const handleChange = (event) => {
        setInputData(event.target.value);
    };

    return <>
        <div className="search_films__wrapper">
            <Title title="ПОИСК"/>
            <Paragraph>{TEXT_CONTENT}</Paragraph>
            <Input placeholder="Введите название" onChange={handleChange} isSearch/>
            <Button onClick={handleClick}>Искать</Button>
        </div>
        <div className='search_films__list'>
            {FILMS_DATA.map(({filmName,poster,count, isFavorites}) => (
                <FilmCard key={filmName} filmName={filmName} poster={poster} isFavorites={isFavorites} count={count}/>
            ))}
        </div>
    </>;

}

export default SearchFilms;