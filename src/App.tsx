import React from 'react';
import { UserContextProvider } from './provider/user';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { ApiProvider } from './provider/ApiProvider/ApiProvider';
import { AxiosProvider } from './provider/AxiosProvider/AxiosProvider';

const App = () => {
    return (
        <ApiProvider>
            <AxiosProvider>
                <UserContextProvider>
                    <RouterProvider router={router} />
                </UserContextProvider>
            </AxiosProvider>
        </ApiProvider>
    );
};

export default App;
