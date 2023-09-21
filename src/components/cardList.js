import React from 'react';
import useCardList from '../hooks/useCardList';
import useCreateCard from '../hooks/useCreateCard';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CardList = () => {
    const { cardList, setCardList } = useCardList();
    const { createCard } = useCreateCard(cardList, setCardList);

    return (
        <div>
            <Button onClick={createCard}>CreateCard</Button>
            <ul>
                {cardList.map(card => (
                    <li key={card.id}>
                        id : {card.id}
                        <ul>
                            <li>
                                path: <Link to={`${card.path}`}>{card.path}</Link>
                            </li>
                            <li> createdBy : {card.createdByUser.email}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardList;
