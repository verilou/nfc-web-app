import React from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const { handleLogin, handleEmail, handlePassword, email, password } = useLogin();
    return (
        <div>
            <label>
                Email:
                <input type="text" name="email" value={email} onChange={handleEmail} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handlePassword} />
            </label>
            <button onClick={handleLogin}> Login </button>
        </div>
    );
};

export default Login;
