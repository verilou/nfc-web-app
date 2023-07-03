import { useState } from 'react';
import { submitLogin } from '../data/login';
import handleAxiosError from '../utils/handleAxiosError';
import { useNavigate } from 'react-router-dom';

const useLogin = context => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);
    const navigation = useNavigate();
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

            context.setUser(response?.data);
            navigation('/profile');
        } catch (error) {
            const errorMessage = handleAxiosError(error);
            if (errorMessage.status === 404) {
                setWrongPassword(true);
            }
        }
    };

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
