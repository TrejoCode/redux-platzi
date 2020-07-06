/**
 *  @version 1.1.0
 *  @author Trejocode - Sergio
 *  @description Combinar todos los Reducers existentes
*/

import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import publicacionesReducer from './publicacionesReducers';

const reducers = combineReducers({
    usuariosReducer,
    publicacionesReducer
});

export default reducers;