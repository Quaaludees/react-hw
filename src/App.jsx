import './App.css';
import {Header} from './components/Header/index.js';
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout.jsx';
import Body from './layouts/Body/Body.jsx';
import {UserContextProvider} from './provider/user/index.js';
import MainPage from './components/MainPage/MainPage.jsx';

const App = () => {

    return (
        <UserContextProvider>
            <HeaderLayout>
                <Header/>
            </HeaderLayout>
            <Body>
               <MainPage/>
            </Body>
        </UserContextProvider>
    );
};

export default App;

