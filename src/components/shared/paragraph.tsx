import React from 'react';

interface Paragraph {
    paraText?: string;
}

const Paragraph: React.FC<Paragraph> = ({ paraText }) => {
    return (
       <p>{paraText}</p>
    );
};

export default Paragraph;
