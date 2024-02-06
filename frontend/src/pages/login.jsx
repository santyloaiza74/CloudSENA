import React, { useState, useEffect } from "react";
import validateUser from "../services/login/validate";
import { Button, Card, Col, Container, Form, Row, Image, Alert } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import './login.css'
import logo1 from './../img/logo1.png'

function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleSubmit = async () => {
        try {
            const { token } = await validateUser(login)
            const accesstoken = token
            console.log(accesstoken)
            localStorage.setItem('token', accesstoken)
            setLogin({
                email: '',
                password: ''
            })
            console.log(login)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setLogin((validateUser) => {
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
                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-dark-50 mb-5">Please enter your login and password!</p>

                                <Form>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <center>
                                            <Form.Label>Email address</Form.Label>
                                        </center>
                                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <center>
                                            <Form.Label>
                                                Password
                                            </Form.Label>
                                        </center>
                                        <Form.Control type="Password" name="password" onChange={handleChange} placeholder="Enter password" />
                                    </Form.Group>

                                    <br />

                                    <center>
                                        <Button className="Buttonn btn" onClick={handleSubmit}>Log in</Button>
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

export default Login