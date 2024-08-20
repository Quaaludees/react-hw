import React from 'react';
import { Maybe } from '../Maybe';
import FormLogin from '../FormLogin/FormLogin';
import { SearchFilms } from '../SearchFilms';
import { useUserContext } from '../../provider/user';

const MainPage = () => {
    const { isLogin } = useUserContext();

    return (
        <Maybe when={!!isLogin} fallback={<FormLogin />}>
            <SearchFilms />
        </Maybe>
    );
};

export default MainPage;
