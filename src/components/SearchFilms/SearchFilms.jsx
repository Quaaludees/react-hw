import {useState} from "react";
import {Title} from "../Title/index.js";
import {Paragraph} from "../Paragraph/index.js";
import Input from "../Input/Input.jsx";
import {Button} from "../Button/index.js";
import './SearchFilms.css';


const TEXT_CONTENT = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

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

    </>;
}

export default SearchFilms;