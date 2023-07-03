import React, { useContext } from 'react';
import useLogin from '../hooks/useLogin';
import { Auth } from '../context/auth';

const Login = () => {
    const auth = useContext(Auth);
    const { handleLogin, handleEmail, handlePassword, email, password, wrongPassword } = useLogin(auth);
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
