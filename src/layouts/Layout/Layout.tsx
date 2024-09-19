import HeaderLayout from '../HeaderLayout/HeaderLayout';
import { Header } from '../../components/Header';
import Body from '../Body/Body';
import React, { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <HeaderLayout>
                <Header />
            </HeaderLayout>
            <Body>{children}</Body>
        </>
    );
};

export default Layout;
