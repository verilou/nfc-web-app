import React from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const { handleLogin, handleEmail, handlePassword, email, password, wrongPassword } = useLogin();
    return (
        <form onSubmit={handleLogin}>
            <label>
                Email:
                <input type="text" name="email" value={email} onChange={handleEmail} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handlePassword} />
            </label>
            {wrongPassword && <p>Email ou mot de passe incorrect</p>}
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;
