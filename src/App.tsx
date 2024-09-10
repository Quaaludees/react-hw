import React from 'react';
import { UserContextProvider } from './provider/user';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

const App = () => {
    return (
        <UserContextProvider>
            <RouterProvider router={router} />
        </UserContextProvider>
    );
};

export default App;
