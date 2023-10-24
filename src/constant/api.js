export const API_URL = process.env.NODE_ENV === 'production'  ? "https://api.louiscastel.fr": 'http://localhost:3000';

export const LOGIN_URL = API_URL + '/login';
export const PROFILE_URL = API_URL + '/profile';
export const CARD_URL = API_URL + '/cards';
export const CARD_CONTENT_URL = API_URL + '/cardContents';
export const CARD_CONTENT_TYPE_URL = CARD_CONTENT_URL + '/types'
