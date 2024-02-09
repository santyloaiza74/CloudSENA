import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './list.css'
import logo1 from './../../img/logo1.png'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

function List() {
    const [proyecto, setProyecto] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:3300/api/v1/proyecto')
            .then((response) => {
                setProyecto(response.data.proyectos);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="card-container">
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                // Agrupa las cards en contenedores de filas
                <div className="card-row">
                    {proyecto.map(({ _id, nombre, autores, ficha, fecha, ruta }) => (
                        <Card key={_id} className="custom-card-style">
                            <Card.Body>
                            <Card.Img variant="top" src={logo1} alt={`${nombre} Image`} />
                                <Card.Title>{nombre}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{autores}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Ficha:</strong> {ficha[0].nombre}<br />
                                    <strong>Fecha:</strong> {fecha}<br />
                                    <strong>Ruta:</strong> {ruta}
                                </Card.Text>
                                <Button className='Buttonn'>Ver Detalles</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default List;
