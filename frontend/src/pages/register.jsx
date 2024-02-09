import React, { useState, useEffect } from "react";
import validateUser from "../services/login/validate";
import { Button, Card, Col, Container, Form, Row, Image, Alert } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import './login.css'
import logo1 from './../img/logo1.png'
import axios from 'axios'

function Register() {
    const [register, setRegister] = useState({
        email: '',
        password: '',
        nombre: '',
        documento: ''

    })
    const navigate = useNavigate()
    const handleNavigate = async ()=>{
        navigate('/login')
    }
    const handleSubmit = async () => {
        try {
            axios.post('http://127.0.0.1:3300/login/register',register)
            .then(function(response){
                console.log(response.data)
                navigate('/login')
            })
            .catch(function(error){
                alert("El Email ya se encuentra registrado")
                console.log(error.response.data)
            })
            
            // const { token } = await validateUser(login)
            // const accesstoken = token
            // console.log(accesstoken)
            // localStorage.setItem('token', accesstoken)
            // setLogin({
            //     email: '',
            //     password: ''
            // })
            // console.log(login)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setRegister((validateUser) => {
            return {
                ...validateUser,
                [name]: value
            }
        })
    }
    return (
        <>
            <Container fluid>

                <Row >
                    <Col col='12'>

                        <Card className='bg-light text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                <img src={logo1}></img>
                                <h2 className="fw-bold mb-2 text-uppercase">Registrarse</h2>
                                <p className="text-dark-50 mb-5">Ingrese los siguientes campos</p>

                                <Form>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <center>
                                            <Form.Label>Email</Form.Label>
                                        </center>
                                        <Form.Control type="email" placeholder="Ingrese su Email" name="email" onChange={handleChange} />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-3" >
                                        <center>
                                            <Form.Label> Contraseña </Form.Label>
                                        </center>
                                        <Form.Control type="Password" name="password" onChange={handleChange} placeholder="Ingrese su Contraseña" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <center>
                                            <Form.Label>
                                                Nombre
                                            </Form.Label>
                                        </center>
                                        <Form.Control type="input" name="nomnbre" onChange={handleChange} placeholder="Ingrese su nombre" />
                                    </Form.Group >
                                    <Form.Group className="mb-3" >
                                        <center>
                                            <Form.Label>
                                                Documento
                                            </Form.Label>
                                        </center>
                                        <Form.Control type="input" name="documento" onChange={handleChange} placeholder="Ingrese su documento" />
                                    </Form.Group>
                                    

                                    <br />

                                    <center>
                                        <Button className="Buttonn btn" onClick={handleSubmit}>Registrarse</Button>
                                        <br/>
                                        <Card.Link onClick={handleNavigate}>Si ya tiene una cuenta Inice Sesion</Card.Link>
                                    </center>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Register