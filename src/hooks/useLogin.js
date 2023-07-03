import { useState } from 'react';
import { submitLogin } from '../data/login';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handlePassword = e => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        await submitLogin(email, password)
    }

    return {
        handleLogin,
        handleEmail,
        handlePassword,
        email,
        password,
    };
};

export default useLogin;
