import React from 'react';
import useCard from '../hooks/useCard';
import { Link } from 'react-router-dom';
import { Button, Card as CardBootstrap } from 'react-bootstrap';

const Card = () => {
    const {
        card: { cardContents },
        error,
    } = useCard();
    console.log(cardContents)
    return (
        <CardBootstrap>
            <CardBootstrap.Body>
                {(cardContents && !error)  && (
                    <>
                        {cardContents.map(content => {
                            console.log(content)
                            return content.type
                        })}
                        <Button
                            variant="secondary"
                            as="a"
                            className="bi bi-link-45deg"
                            href={cardContents.LINKEDIN}
                        />
                        <Button
                            variant="secondary"
                            as="a"
                            className="bi bi-linkedin"
                            href={cardContents.WEB_SITE}
                        />
                        <p>{cardContents.TITLE}</p>
                        <p>{cardContents.FULLNAME}</p>
                        <Link to={'edit'}>Edit Card</Link>
                    </>
                )}
                {error}
            </CardBootstrap.Body>
        </CardBootstrap>
    );
};

export default Card;
