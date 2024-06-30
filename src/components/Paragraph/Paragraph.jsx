import React from 'react';

const Paragraph = ({ children }) => {
    return (
        <p className="paragraph__main">
            {children}
        </p>
    );
};

export default Paragraph;