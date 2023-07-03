import { useEffect, useState } from 'react';
import { getUserLoggedIn } from '../data/login';

const useAuth = () => {
    const [user, setUser] = useState({});
    const [hasAuthenticated, setHasAuthenticated] = useState(false);
    useEffect(() => {
        const isLoggedIn = async () => {
            try {
                const { data } = await getUserLoggedIn();
                setUser(data);
                setHasAuthenticated(true);
            } catch (error) {
                setHasAuthenticated(true);
            }
        };
        isLoggedIn();
    }, []);

    return {
        user,
        setUser,
        hasAuthenticated,
    };
};

export default useAuth;
