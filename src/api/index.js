	/**
 *  @version 1.0.1
 *  @author Trejocode - Sergio
 *  @description Cliente HTTP para todas las peticiones Web
 *  @param {String} url: "/EndPoint"
*/

import axios from 'axios';


/**
 * @description Obtener todos los usuarios
*/
export const apiGetUsers = async () => {

    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        return { data };
    } catch (error) {
        return { error: error.message };
    }

};

/**
 * @description Obtener todas las publicaciones
*/
export const apiGetPublications = async (userId) => {
    
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        return { data };
    } catch (error) {
        return { error: error.message };
    }

};