// @ts-check

import { useContext } from 'react';

import { AuthContext } from '../context/Auth/index.js';

const useAuth = () => useContext(AuthContext);

export default useAuth;
