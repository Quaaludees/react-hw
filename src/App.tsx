import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { ApiProvider } from './provider/ApiProvider/ApiProvider';
import { AxiosProvider } from './provider/AxiosProvider/AxiosProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <ApiProvider>
                <AxiosProvider>
                    <RouterProvider router={router} />
                </AxiosProvider>
            </ApiProvider>
        </Provider>
    );
};

export default App;
