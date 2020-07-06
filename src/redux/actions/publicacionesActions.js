/**
 *  @version 1.1.0
 *  @author Trejocode - Sergio
 *  @description Todas las funciones de publicaciones
*/
import { apiGetPublications } from '../../api';
import { 
    GET_PUBLICATIONS, GET_PUBLICATIONS_ERROR, GET_PUBLICATIONS_LOADING } 
from '../types/publicacionesTypes';

export const getPublications = (id) => async (dispatch) => {

    dispatch({
        type: GET_PUBLICATIONS_LOADING
    });

    const { data, error } = await apiGetPublications(id);

    if(error) {
        dispatch({
            type: GET_PUBLICATIONS_ERROR,
            payload: error
        });
    }

    dispatch({
        type: GET_PUBLICATIONS,
        payload: data
    });

};