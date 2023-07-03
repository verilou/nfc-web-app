import axios from 'axios';
import { LOGIN_URL, PROFILE_URL } from '../constant/api';

export const submitLogin = (email, password) =>
    axios.post(
        LOGIN_URL,
        {
            email,
            password,
        },
        { withCredentials: true },
    );

export const getUserLoggedIn = () => axios.get(PROFILE_URL, { withCredentials: true });
