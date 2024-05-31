import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../EditarProyecto/list.css';

function EditU() {
  const { id } = useParams();

  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
    nombre: '',
    documento: '',
    ficha: '',
    rol: '',
    gestor: '',
  });

  const [fichas, setFichas] = useState([]);
  const [roles, setRoles] = useState([]);
  const [gestores, setGestores] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.HOST}/login/${id}`)
      .then(res => {
        setUsuario(res.data.user);
        console.log(res.data.user);
      })
      .catch(err => console.log(err));

    axios.get(`${process.env.HOST}/api/v1/ficha`)
      .then(res => setFichas(res.data.fichas));

    axios.get(`${process.env.HOST}/api/v1/rol`)
      .then(res => {
        setRoles(res.data.roles);
        console.log(res.data)
      });


    axios.get(`${process.env.HOST}/api/v1/gestor`)
      .then(res => setGestores(res.data.gestors));
  }, []);

  const handleInputChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${process.env.HOST}/login/${id}`, usuario);
      alert('Usuario actualizado');
    } catch (err) { 
      console.log(err);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className='cardddd' style={{ borderRadius: '1rem', maxWidth: '90000px' }}>
            <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Editar Usuario</h2>
              <p className="text-dark-50 mb-5">Actualice el rol del Usuario</p>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        value={usuario.email}
                        onChange={handleInputChange}
                        disabled
                      />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        value={usuario.password}
                        onChange={handleInputChange}
                        type="password"
                        disabled
                      />
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="formNombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        name="nombre"
                        value={usuario.nombre}
                        onChange={handleInputChange}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDocumento">
                      <Form.Label>Documento</Form.Label>
                      <Form.Control
                        name="documento"
                        value={usuario.documento}
                        onChange={handleInputChange}
                        disabled
                      />
                    </Form.Group>

                    
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formRol">
                      <Form.Label>Rol</Form.Label>
                      <Form.Select
                        name="rol"
                        value={usuario.rol}
                        onChange={handleInputChange}
                      >
                        {roles.map(r => (
                          <option key={r._id} value={r._id} selected={usuario.rol === r._id} >{r.name}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGestor">
                      <Form.Label>Gestor</Form.Label>
                      <Form.Select
                        name="gestor"
                        value={usuario.gestor}
                        onChange={handleInputChange}
                        disabled
                      >
                        {gestores.map(g => (
                          <option key={g._id} value={g._id} selected={usuario.gestor === g._id} >{g.nombre}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFicha">
                      <Form.Label>Ficha</Form.Label>
                      <Form.Select
                        name="ficha"
                        value={usuario.ficha}
                        onChange={handleInputChange}
                        disabled
                        selected={usuario.ficha}
                      >
                        {fichas.map(f => (
                          <option key={f._id} value={f._id} selected={usuario.ficha} >{f.nombre}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <center>
                  <Button variant='primary' onClick={handleSubmit}>
                    Actualizar Usuario
                  </Button>
                </center>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EditU;
