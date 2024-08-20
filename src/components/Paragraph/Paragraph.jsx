import React from 'react';
import './Paragraph.css';

const Paragraph = ({ children }) => {
    return <p className="paragraph__main">{children}</p>;
};

export default Paragraph;
