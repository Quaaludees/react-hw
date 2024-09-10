import { createBrowserRouter, Outlet } from 'react-router-dom';
import React from 'react';
import Layout from '../layouts/Layout/Layout';
import { ViewFilm, MainPage, Favorites, FormLogin, ErrorPage } from '../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children: [
            {
                element: <MainPage />,
                index: true,
            },
            {
                path: '/login',
                element: <FormLogin />,
            },
            {
                path: '/film/:id',
                element: <ViewFilm />,
            },
            {
                path: '/favorites',
                element: <Favorites />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
