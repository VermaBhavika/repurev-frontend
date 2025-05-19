import React from 'react';

interface Heading {
    tagName?: string;
    headingText?: string;
}

const Heading: React.FC<Heading> = ({ tagName, headingText }) => {
    return (
        tagName == 'h1' ? 
            <h1>{headingText}</h1> : 
        tagName == 'h2' ? 
            <h2>{headingText}</h2> : 
        tagName == 'h3' ? 
            <h3>{headingText}</h3> : 
        tagName == 'h4' ? 
            <h4>{headingText}</h4> : 
        tagName == 'h5' ? 
            <h5>{headingText}</h5> : 
            <h6>{headingText}</h6>
    );
};

export default Heading;
