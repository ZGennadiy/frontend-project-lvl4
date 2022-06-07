// @ts-check

import { useContext } from 'react';

import { AuthContext } from '../context/Auth/index.js';

export const useAuth = () => useContext(AuthContext);
