import React from 'react';

import useCard from '../hooks/useCard';
import { Link } from 'react-router-dom';
const Card = () => {
    const { card } = useCard();
    console.log(card.cardContents);
    return (
        <div>
            <p>{card.path}</p>
            {card.cardContents.map(content => (
                <p key={content.id}>
                    {content.type} : {content.value}
                </p>
            ))}
            <Link to={'edit'}>Edit Card</Link>
        </div>
    );
};

export default Card;
