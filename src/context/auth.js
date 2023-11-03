import { createContext } from 'react';

export const Auth = createContext({ user: {}, setProfile: () => {}, hasTryAuthenticated: false });
