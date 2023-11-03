import { useEffect, useState } from 'react';
import { getUserLoggedIn } from '../data/login';

const useAuth = () => {
    const [user, setUser] = useState({});
    const [hasTryAuthenticated, setHasTryAuthenticated] = useState(false);
    useEffect(() => {
        const isLoggedIn = async () => {
            try {
                const { data } = await getUserLoggedIn();
                setUser(data);
                setHasTryAuthenticated(true);
            } catch (error) {
                setHasTryAuthenticated(true);
            }
        };
        isLoggedIn();
    }, []);

    return {
        user,
        setUser,
        hasTryAuthenticated,
    };
};

export default useAuth;
