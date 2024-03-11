import React, { useState, useEffect } from "react";
import validateUser from "../services/login/validate";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo1 from './../img/logo1.png';
import './register.css'
import { CDBBtn, CDBIcon, CDBContainer } from "cdbreact";

function Register() {
    const [register, setRegister] = useState({
        email: '',
        password: '',
        nombre: '',
        documento: '',
        ficha: '',
        gestor: ''
    });

    const [fichas, setFichas] = useState([]);
    const [gestores, setGestores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:3300/api/v1/ficha')
            .then(response => {
                setFichas(response.data.fichas);
            })
            .catch(error => {
                console.error('Error al obtener las fichas:', error);
            });

        axios.get('http://127.0.0.1:3300/api/v1/gestor')
            .then(response => {
                setGestores(response.data.gestors);
            })
            .catch(error => {
                console.error('Error al obtener los gestores:', error);
            });
    }, []);

    const handleNavigate = async () => {
        navigate('/login');
    }

    const handleSubmit = async () => {
        try {
            axios.post('http://127.0.0.1:3300/login/register', register)
                .then(function (response) {
                    console.log(response.data);
                    alert("Registrado Correctamente, Inicie sesion")
                    navigate('/login');
                })
                .catch(function (error) {
                    alert("El Email ya se encuentra registrado");
                    console.log(error.response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegister(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    
                    <Card className='bg-light text-dark my-5 mx-autocar' style={{ borderRadius: '1rem', maxWidth: '800px' }}>
                        <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <img src={logo1} alt="Logo"></img>
                            <h2 className="fw-bold mb-2 text-uppercase">Registrarse</h2>
                            <p className="text-dark-50 mb-5">Ingrese los siguientes campos</p>

                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="inputt" controlId="formBasicEmail" style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                        
                                                <Form.Label>Email</Form.Label>

                                            <Form.Control type="email" placeholder="Ingrese su Email" name="email" onChange={handleChange} />
                                        </Form.Group>

                                        <Form.Group className="inputt">
                                            
                                                <Form.Label>Nombre</Form.Label>
                                            
                                            <Form.Control type="input" name="nombre" onChange={handleChange} placeholder="Ingrese su nombre" />
                                        </Form.Group>

                                        <Form.Group className="inputt">
                                                <Form.Label>Ficha</Form.Label>
                                            
                                            <Form.Control as="select" name="ficha" onChange={handleChange}>
                                                <option value="">Seleccione una ficha</option>
                                                {fichas.map(ficha => (
                                                    <option key={ficha._id} value={ficha._id}>{ficha.nombre}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="inputt" >
                                        
                                                <Form.Label> Contraseña </Form.Label>
                                            
                                            <Form.Control type="Password" name="password" onChange={handleChange} placeholder="Ingrese su Contraseña" />
                                        </Form.Group>

                                        <Form.Group className="inputt" >
                                            
                                                <Form.Label>Documento</Form.Label>
                                            
                                            <Form.Control type="input" name="documento" onChange={handleChange} placeholder="Ingrese su documento" />
                                        </Form.Group>

                                        <Form.Group className="inputt">
                                            
                                                <Form.Label>Gestor</Form.Label>
                                            
                                            <Form.Control as="select" name="gestor" onChange={handleChange}>
                                                <option value="">Seleccione un gestor</option>
                                                {gestores.map(gestor => (
                                                    <option key={gestor._id} value={gestor._id}>{gestor.nombre}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br/>

                                <center>
                                    <CDBBtn className='Buttonn' onClick={handleSubmit}>
                                            <CDBIcon icon="fa-solid fa-user" className="" onClick={handleSubmit} />
                                            Registrarse
                                        </CDBBtn>
                                    <Card.Link onClick={handleNavigate}>Si ya tiene una cuenta Inicie Sesión</Card.Link>
                                </center>
                            </Form>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Register;
