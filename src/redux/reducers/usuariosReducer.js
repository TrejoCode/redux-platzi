/**
 *  @version 1.1.0
 *  @author Trejocode - Sergio
 *  @description Reducer de usuarios
*/
import { GET_USERS, GET_USERS_ERROR, GET_USERS_LOADING } from '../types/usuariosTypes';

/**
 * @description Estados iniciales de usuarios
*/
const INITIAL_STATE = {
    users: [],
    loading: false,
    error: false
};


const usuariosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, 
                loading: false,
                error: false,
                users: action.payload
            };
        case GET_USERS_ERROR: 
        return {
            ...state,
            loading: false,
            error: action.payload
        }
        case GET_USERS_LOADING: 
        return {
            ...state,
            loading: true,
            error: false
        }
        default:
            return state;
    }
};

export default usuariosReducer;