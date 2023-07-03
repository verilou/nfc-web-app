import { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import handleAxiosError from '../utils/handleAxiosError';
import { submitLogin } from '../data/login';

const useLogin = ({ user, setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);
    const navigate = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handlePassword = e => {
        setPassword(e.target.value);
    };

    const handleLogin = async e => {
        e.preventDefault();
        try {
            const response = await submitLogin(email, password);

            if (wrongPassword) {
                setWrongPassword(false);
            }

            setUser(response?.data);
            redirect('/profile');
        } catch (error) {
            const errorMessage = handleAxiosError(error);
            if (errorMessage.status === 404) {
                setWrongPassword(true);
            }
        }
    };

    useEffect(() => {
        if (user.id) navigate('/profile');
    }, []);

    return {
        handleLogin,
        handleEmail,
        handlePassword,
        email,
        password,
        wrongPassword,
    };
};

export default useLogin;
