import axios from 'axios';
import { CARD_URL } from '../constant/api';

export const createNewCard = cardContent =>
    axios.post(CARD_URL, cardContent, { withCredentials: true });
export const getCards = () => axios.get(CARD_URL, { withCredentials: true });

export const getCardWithUuid = (uuid) => axios.get(`${CARD_URL}/${uuid}`, { withCredentials: true });
