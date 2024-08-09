import {useContext} from 'react';
import {UserContext} from './user.context.jsx';

export const useUserContext = () =>  useContext(UserContext);