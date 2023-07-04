import { useEffect, useState } from 'react';
import { getCardWithUuid } from '../data/card';
import { useParams } from 'react-router-dom';

const useCard = () => {
    const [card, setCard] = useState({ cardContents: [] });
    const { uuid } = useParams();

    useEffect(() => {
        const getCard = async () => {
            const response = await getCardWithUuid(uuid);
            setCard(response.data);
        };
        getCard();
    }, []);

    return { card };
};

export default useCard;
