import './App.css';

import {Button, Title, Paragraph} from "./components";
import {Header} from "./components/Header/index.js";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation.jsx";
import Input from "./components/Input/Input.jsx";
import {useState} from "react";

const TEXT_CONTENT = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

function App() {


    const [inputData, setInputData] = useState('');


    const inputChange = (event) => {
        setInputData(event.target.value);
    };

    const onClick = () => {
        console.log(inputData);
    };


    return (
        <>
            <Header/>
            <Input  value={inputData} onChange={inputChange} placeholder='Ваше имя'/>
            <Input placeholder='Введите название' isSearch/>
            <Title title="ПОИСК"/>
            <Paragraph>{TEXT_CONTENT}</Paragraph>
            <Button  onClick={onClick}>Искать</Button>
        </>
    );
}

export default App;

