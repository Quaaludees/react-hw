import './App.css';

import {Button, Title, Paragraph} from "./components";

const TEXT_CONTENT = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

function App() {

    return (
        <>
            <Title title="ПОИСК"/>
            <Paragraph>{TEXT_CONTENT}</Paragraph>
            <Button>Искать</Button>
        </>
    );
}

export default App;
