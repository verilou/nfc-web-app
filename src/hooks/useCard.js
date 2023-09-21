import { useEffect, useState } from 'react';
import { getCardWithUuid } from '../data/card';
import { useParams } from 'react-router-dom';
import setCardContentAsObject from '../utils/setCardContentAsObject';

const useCard = () => {
    const [card, setCard] = useState({ cardContents: {} });
    const { uuid } = useParams();

    useEffect(() => {
        const getCard = async () => {
            const response = await getCardWithUuid(uuid);
            const card = setCardContentAsObject(response.data);
            setCard(card);
        };
        getCard();
    }, []);

    return { card };
};

export default useCard;
