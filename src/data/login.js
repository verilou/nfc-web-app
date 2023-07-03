import axios from 'axios';
import { LOGIN_URL } from '../constant/api';

export const submitLogin = (email, password) =>
    axios.post(
        LOGIN_URL,
        {
            email,
            password,
        },
        { withCredentials: true, maxRedirects: 0 },
    );
