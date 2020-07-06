/**
 *  @version 1.1.0
 *  @author Trejocode - Sergio
 *  @description Reducer de publicaciones
*/
import { 
    GET_PUBLICATIONS, GET_PUBLICATIONS_ERROR, GET_PUBLICATIONS_LOADING } 
from '../types/publicacionesTypes';

/**
 * @description Estados iniciales de publicaciones
*/
const INITIAL_STATE = {
    publications: [],
    loading: false,
    error: false
};


const publicacionesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PUBLICATIONS:
            return {
                ...state, 
                loading: false,
                error: false,
                publications: action.payload
            };
        case GET_PUBLICATIONS_ERROR: 
        return {
            ...state,
            loading: false,
            error: action.payload
        }
        case GET_PUBLICATIONS_LOADING: 
        return {
            ...state,
            loading: true,
            error: false
        }
        default:
            return state;
    }
};

export default publicacionesReducer;