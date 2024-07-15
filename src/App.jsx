import './App.css';
import {Header} from "./components/Header/index.js";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout.jsx";
import Body from "./layouts/Body/Body.jsx";
import {SearchFilms} from "./components/SearchFilms/index.js";

function App() {

    return (
        <>
            <HeaderLayout>
                <Header/>
            </HeaderLayout>
            <Body>
                <SearchFilms/>
            </Body>
        </>
    );
}

export default App;

