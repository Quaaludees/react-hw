import React from 'react';
import { useParams } from 'react-router-dom';

export const ViewFilm = () => {
    const { id } = useParams();
    console.log(id);
    return <>ViewFilm</>;
};
