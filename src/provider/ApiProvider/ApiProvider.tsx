import React, { FC, PropsWithChildren, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const RETRY_OPTIONS = {
    retry: 1,
    retryDelay: 3000,
};

export const ApiProvider: FC<PropsWithChildren> = ({ children }) => {
    const client = useMemo(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    ...RETRY_OPTIONS,
                    refetchOnWindowFocus: false,
                },
                mutations: {
                    ...RETRY_OPTIONS,
                },
            },
        });
    }, []);
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};
