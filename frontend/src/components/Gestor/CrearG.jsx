import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../EditarProyecto/list.css';
import { useNavigate } from 'react-router-dom';
import { CDBBtn, CDBIcon, CDBContainer } from "cdbreact";

function List() {
    const [gestor, setGestor] = useState({
        nombre: '',
        documento: '',
        celular: '',
        correo: '',
        ficha: '', // Nuevo campo para la relación con la ficha
    });
    const navigate =useNavigate()
    const [fichas, setFichas] = useState([]); // Estado para almacenar las fichas

    useEffect(() => {
        axios.get('https://cloudsena-itj7.onrender.com/api/v1/ficha')
            .then(response => setFichas(response.data.fichas))
            .catch(error => console.error('Error fetching fichas:', error));
    }, []);

    const handleSubmit = async () => {
        try {
            axios.post('https://cloudsena-itj7.onrender.com/api/v1/gestor', gestor)
                .then(function (response) {
                    console.log(response.data);
                    alert("Gestor Creado");
                    navigate('/gestor');
                })
                .catch(function (error) {
                    alert("Hubo un error al crear el gestor");
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        setGestor({
            ...gestor,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className='cardddd' style={{ borderRadius: '1rem', maxWidth: '90000px' }}>
                        <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h2 className="fw-bold mb-2 text-uppercase">Crear Gestor</h2>
                            <p className="text-dark-50 mb-5">Ingrese los siguientes campos</p>
                            <div className="fields">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formNombre">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control
                                                name="nombre"
                                                value={gestor.nombre}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formDocumento">
                                            <Form.Label>Documento</Form.Label>
                                            <Form.Control
                                                name="documento"
                                                value={gestor.documento}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formCelular">
                                            <Form.Label>Celular</Form.Label>
                                            <Form.Control
                                                name="celular"
                                                value={gestor.celular}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formCorreo">
                                            <Form.Label>Correo</Form.Label>
                                            <Form.Control
                                                name="correo"
                                                value={gestor.correo}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        
                                    </Col>
                                    
                                        <Form.Group className="mb-3" controlId="formFicha">
                                            <Form.Label>Ficha</Form.Label>
                                            <Form.Control as="select"
                                                name="ficha"
                                                value={gestor.ficha}
                                                onChange={handleInputChange}
                                            >
                                                <option>Seleccione Ficha</option>
                                                {fichas.map(f => (
                                                    <option key={f._id} value={f._id}>{f.nombre}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                        
                                        
                                </Row>
                            </div>
                            <br/>
                            <CDBBtn className='Buttonn' type="submit" onClick={handleSubmit}>
                                            <CDBIcon icon="fa-solid fa-plus" className="ms-1" />
                                            Crear Gestor
                                        </CDBBtn>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default List;
