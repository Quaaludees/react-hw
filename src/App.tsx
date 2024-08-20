import React from 'react';
import './App.css';
import { Header } from './components/Header/index.js';
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout.js';
import Body from './layouts/Body/Body.js';
import { UserContextProvider } from './provider/user';
import MainPage from './components/MainPage/MainPage.js';

const App = () => {
    return (
        <UserContextProvider>
            <HeaderLayout>
                <Header />
            </HeaderLayout>
            <Body>
                <MainPage />
            </Body>
        </UserContextProvider>
    );
};

export default App;
