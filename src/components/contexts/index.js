import { createContext, useContext } from 'react';

const authContext = createContext({});
const useAuth = () => useContext(authContext);

export default useAuth;
