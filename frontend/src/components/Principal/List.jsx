import React, { useEffect, useState } from 'react'
import { Spinner, Table, Button } from 'react-bootstrap'
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
function List() {
    const [proyecto, setPost] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:3300/api/v1/proyecto').then((response) => {
            setPost(response.data.proyectos);
        });
    }, []);
    return (
        <Table striped bordered hover>
            <thead>
                <th>Nombre</th>
                <th>Autores</th>
                <th>Ficha</th>
                <th>Fecha</th>
                <th>Ruta</th>
            </thead>
            <tbody>
                {proyecto.map(({ _id, nombre,autores, ficha, fecha, ruta}) => (
                    <tr key={`user-row-${_id}`}>
                        <td>{nombre}</td>
                        <td>{autores}</td>
                        <td>{ficha[0].nombre}</td>
                        <td>{fecha}</td>
                        <td>{ruta}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default List