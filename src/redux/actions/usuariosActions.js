/**
 *  @version 1.1.0
 *  @author Trejocode - Sergio
 *  @description Todas las funciones de usuarios
*/
import { apiGetUsers } from '../../api';
import { 
    GET_USERS, GET_USERS_ERROR, GET_USERS_LOADING } 
from '../types/usuariosTypes';

export const getUsers = () => async (dispatch) => {

    dispatch({
        type: GET_USERS_LOADING
    });

    const { data, error } = await apiGetUsers();

    if(error) {
        dispatch({
            type: GET_USERS_ERROR,
            payload: error
        });
    }

    dispatch({
        type: GET_USERS,
        payload: data
    });

};