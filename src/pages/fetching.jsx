/**
 *  @version 1.1.1
 *  @author Trejocode - Sergio
 *  @description Página de /fetch
*/

import React, { useEffect } from 'react';
import Layout   from './layout';
import Progress from '../libs/nprogress';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as usuariosActions from '../redux/actions/usuariosActions';

const PageFetch = (props) => {    

    useEffect(() => {

        /**
         * @description: Obtener lista de usuarios
        */
        const fetchUsers = async () => {

            props.getUsers();

        }

        fetchUsers();

    }, []);

    return (
        <Layout title = "Data Fetching" description = "React Boilerplate: Página de Datos" keywords = "React.js, SEO Ready, Fetching" >
            <Progress isAnimating = { props.loading } />
            <div className="page-fetch justify-center">
                <div className="full justify-center align-center">
                    <div className="container column">
                        <div className="white-space-64"></div>
                        <div className="justify-center">
                            <h1 className="text-center color-secondary">
                                Data Fetching
                                <span role="img" aria-label="Icono de Radar">📡</span>
                            </h1>
                        </div>
                        <div className="white-space-16"></div>
                        <div className="justify-center">
                            <h2 className="color-gray text-center">
                                Edit /utils/http for configure HTTP Client
                                <span role="img" aria-label="Icono de Laptop"> 💻</span>
                            </h2>
                        </div>
                        <div className="white-space-16"></div>
                        <div className="justify-center">
                            <p className="text-center font-small">
                                Provided by: <a className = "underline" href="https://reqres.in">Reqres</a> With the power of <a className = "underline" href="https://github.com/visionmedia/superagent">Superagent</a>
                            </p>
                        </div>
                        <div className="white-space-32"></div>
                        <div className="table-container" aria-live="assertive">
                        { !props.loading &&
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Usuario</th>
                                            <th>Email</th>
                                            <th>Ver más</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.users.map((user, key) =>
                                                <tr key = { key } >
                                                    <td>{ user.id }</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <Link to = { `/publicaciones/${user.id}` }>
                                                            Ver más
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                    <caption className="font-small">Lista de usuarios desde Reqres</caption>
                                </table>
                            </div>
                        }
                        </div>
                        <div className="white-space-64"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );

};


const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(PageFetch);