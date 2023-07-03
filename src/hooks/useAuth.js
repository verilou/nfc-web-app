import { useEffect, useState } from 'react';
import { getUserLoggedIn } from '../data/login';

const useAuth = () => {
    useEffect(() => {
        const isLoggedIn = async () => {
            try {
                const { data } = await getUserLoggedIn();
                setUser(data);
            } catch (error) {
                console.log('User disconnected');
            }
        };
        isLoggedIn();
    }, []);

    const [user, setUser] = useState({});
    return {
        user,
        setUser,
    };
};

export default useAuth;
