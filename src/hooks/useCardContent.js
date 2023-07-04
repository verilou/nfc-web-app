import { useEffect, useState } from 'react';
import { createNewCardContent, getCardContentTypes } from '../data/cardContent';

const useCardContent = card => {
    const [cardContentType, setCardContentType] = useState([]);
    const [cardContents, setCardContent] = useState([]);
    const [newContentItem, setNewContentItem] = useState({ type: 'WEB_SITE', value: '' });

    const fetchCardContentType = async () => {
        const response = await getCardContentTypes();
        setCardContentType(response.data);
    };

    useEffect(() => {
        fetchCardContentType();
    }, []);

    useEffect(() => {
        if (card.cardContents !== undefined) {
            setCardContent(card.cardContents);
        }
    }, [card.cardContents]);

    const handleSubmit = async () => {
        const response = await createNewCardContent(card.id, newContentItem);
        setCardContent([response.data, ...cardContents]);
    };

    const handleChange = key => e => {
        const editedNewContentItem = { ...newContentItem };
        editedNewContentItem[key] = e.target.value;
        setNewContentItem(editedNewContentItem);
    };

    return {
        cardContents,
        handleChange,
        newContentItem,
        cardContentType,
        handleSubmit,
    };
};

export default useCardContent;
