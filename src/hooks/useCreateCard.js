import { createNewCard } from '../data/card';
import handleAxiosError from '../utils/handleAxiosError';

const useCreateCard = (cardList, setCardList) => {
    const createCard = async () => {
        try {
            const response = await createNewCard();
            setCardList([response.data, ...cardList]);
        } catch (e) {
            const error = handleAxiosError(e);
            console.log(error);
        }
    };

    return {
        createCard,
    };
};

export default useCreateCard;
