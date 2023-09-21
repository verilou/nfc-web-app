import React, { useContext } from 'react';
import useLogin from '../hooks/useLogin';
import { Auth } from '../context/auth';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';

const Login = () => {
    const auth = useContext(Auth);
    const { handleLogin, handleEmail, handlePassword, email, password, wrongPassword } =
        useLogin(auth);
    return (
        <form onSubmit={handleLogin}>
            <Row className="justify-content-md-center">
                <Col lg="3" md="6">
                    <div>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            aria-describedby="email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            value={password}
                            type="password"
                            id="password"
                            onChange={handlePassword}
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>

                    {wrongPassword && (
                        <Alert variant="danger" style={{ marginTop: 10 }}>
                            Email ou mot de passe incorrect
                        </Alert>
                    )}
                    <Button style={{ marginTop: 10 }} as="input" type="submit" value="login" />
                </Col>
            </Row>
        </form>
    );
};

export default Login;
