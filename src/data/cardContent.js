import axios from 'axios';
import { CARD_CONTENT_TYPE_URL, CARD_CONTENT_URL } from '../constant/api';

export const getCardContentTypes = () =>
    axios.get(CARD_CONTENT_TYPE_URL, { withCredentials: true });

export const createNewCardContent = (cardId, payload) =>
    axios.post(`${CARD_CONTENT_URL}/${cardId}`, payload, { withCredentials: true });
