import { useEffect, useState } from 'react';
import { getCards } from '../data/card';

const useCardList = () => {
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        const getCardList = async () => {
            const reponse = await getCards();
            setCardList(reponse.data);
        };
        getCardList();
    }, []);
    return {
        cardList,
        setCardList,
    };
};

export default useCardList;
