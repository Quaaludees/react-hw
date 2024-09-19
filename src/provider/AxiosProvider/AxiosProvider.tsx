import React, { FC, PropsWithChildren } from 'react';
import axios from 'axios';
import { AxiosContextProvider } from './context';

const axiosInstance = axios.create({
    baseURL: '',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODRmYmRiMWYyMTRmNWFkNWNmYjYyMWZmM2M5ZDM5NCIsIm5iZiI6MTcyNTk2MzE4My4wMzEzOCwic3ViIjoiNjZlMDFhMmNkN2E5YTliMDk3MmJhYjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8Hh1CjIeMe0frj4TvL1q11ibhRSe3ATpBwPAGjzmSO4',
    },
});
export const AxiosProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <AxiosContextProvider.Provider value={{ axiosInstance }}>
            {children}
        </AxiosContextProvider.Provider>
    );
};
