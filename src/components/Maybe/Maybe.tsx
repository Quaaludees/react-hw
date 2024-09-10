import React, { FC, PropsWithChildren, ReactNode } from 'react';

type Props = {
    fallback?: ReactNode;
    when: boolean;
};
export const Maybe: FC<PropsWithChildren<Props>> = ({
    children,
    fallback,
    when,
}) => {
    const jsx = when ? children : fallback;
    return <>{jsx}</>;
};
