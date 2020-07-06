/**
 *  @version 1.1.0
 *  @author Trejocode - Sergio
 *  @description Página de /publicaciones/:id
*/

import React, { useEffect } from 'react';
import Layout from './layout';
import Progress from '../libs/nprogress';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosActions from '../redux/actions/usuariosActions';
import * as publicacionesActions from '../redux/actions/publicacionesActions';

const PagePublications = (props) => {

    const { id } = useParams();

    useEffect(() => {
    
        const getUserId = async () => {

            if(!props.usuariosReducer.users.length) {
                await props.getUsers();
            }

            props.getPublications(id);
        };

        getUserId();

    }, []);

    console.log(props);

    return(
        <Layout title = "Publicaciones" description = "React Boilerplate: Página de Inicio" keywords = "React.js, SEO Ready, Inicio" >
            <Progress isAnimating = { props.publicacionesReducer.loading } />
            <main className="page-index justify-center">
                <div className="full justify-center align-center">
                    <div className="container column">
                        <div className="justify-center">
                            <h1 className="text-center color-secondary">
                                React.js on ID : { id }
                                <span role="img" aria-label="Icono de React">⚛️</span>
                            </h1>
                        </div>
                        <div className="white-space-16"></div>
                        { !props.publicacionesReducer.loading &&
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Título</th>
                                            <th>Contenido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.publicacionesReducer.publications.map((post, key) =>
                                                <tr key = { key }>
                                                    <td>{ post.id }</td>
                                                    <td>{post.title}</td>
                                                    <td>{post.body}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                    <caption className="font-small">Lista de usuarios desde Reqres</caption>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </main>
        </Layout>
    );
};

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
    return {
        usuariosReducer,
        publicacionesReducer
    };
};

const mapDispatchToProps = {
    ...usuariosActions,
    ...publicacionesActions
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePublications);