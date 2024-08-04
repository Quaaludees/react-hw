import React from 'react';

export const Maybe = ({ children, fallback, when }) => {

    const jsx = when ? children : fallback;
    return (<>{jsx}</>);

};

