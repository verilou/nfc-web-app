import { useEffect, useState } from 'react';

import matchUUID from '../utils/matchUUID';
import { getCardWithUuid } from '../data/card';
import { useParams } from 'react-router-dom';
import handleAxiosError from '../utils/handleAxiosError';

const useCard = () => {
    const [card, setCard] = useState({ cardContents: [] });
    const [error, setError] = useState('');
    const { uuid } = useParams();

    useEffect(() => {
        if (matchUUID(uuid)) {
            const getCard = async () => {
                try {
                    const response = await getCardWithUuid(uuid);
                    setCard(response.data);
                } catch (axiosError) {
                    const error = handleAxiosError(axiosError);
                    setError(
                        `Erreur ${error.status}: une erreur est survenue, la carte n'existe peut être pas`,
                    );
                }
            };
            getCard();
        } else {
            setError(`Erreur 404: la carte n'existe pas`);
        }
    }, []);

    return { card, error };
};

export default useCard;
