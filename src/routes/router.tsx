import { createBrowserRouter, Outlet } from 'react-router-dom';
import React from 'react';
import Layout from '../layouts/Layout/Layout';
import { ViewFilm, MainPage, Favorites, FormLogin, ErrorPage } from '../pages';
import { RequireAuth } from '../helpers/RequireAuth';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <RequireAuth>
                <Layout>
                    <Outlet />
                </Layout>
            </RequireAuth>
        ),
        children: [
            {
                element: <MainPage />,
                index: true,
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
        path: '/auth',
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children: [
            {
                path: 'login',
                element: <FormLogin />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
