import React from 'react';
import useCard from '../hooks/useCard';
import useCardContent from '../hooks/useCardContent';
import { Link } from 'react-router-dom';

const CardEdit = () => {
    const { card } = useCard();
    const { cardContents, cardContentType, newContentItem, handleChange, handleSubmit } =
        useCardContent(card);

    return (
        <div>
            <Link to={`/card/${card.path}`}>{card.path}</Link>
            <p>New content</p>
            {cardContents.map(content => (
                <p key={content.id}>
                    {content.type} : {content.value}
                </p>
            ))}
            <select onChange={handleChange('type')}>
                {cardContentType.map(type => {
                    return (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    );
                })}
            </select>
            <input type="text" value={newContentItem.value} onChange={handleChange('value')} />
            <button onClick={handleSubmit}>Add new content</button>
        </div>
    );
};
export default CardEdit;
