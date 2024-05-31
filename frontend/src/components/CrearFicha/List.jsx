import { useState, useEffect } from 'react';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../EditarProyecto/list.css';

function List() {
    const [ficha, setFicha] = useState({
        nombre: '',
        codigo: '',
        tipo: '',
        fecha_inicio: '',
        fecha_fin: '',
        gestor: '',
        usuario: '',
    });

    const [gestores, setGestores] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get('https://cloudsena-itj7.onrender.com/api/v1/gestor')
            .then(response => setGestores(response.data.gestors))
            .catch(error => console.error('Error fetching gestores:', error));

        axios.get('https://cloudsena-itj7.onrender.com/login')
            .then(response => setUsuarios(response.data.users))
            .catch(error => console.error('Error fetching usuarios:', error));
    }, []);

    const handleInputChange = (e) => {
        setFicha({
            ...ficha,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            axios.post('https://cloudsena-itj7.onrender.com/api/v1/ficha', ficha)
                .then(function (response) {
                    console.log(response.data);
                    alert("Ficha Creada");
                })
                .catch(function (error) {
                    alert("El Email ya se encuentra registrado");
                    console.log(error.response.data);
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className='cardddd' style={{ borderRadius: '1rem', maxWidth: '90000px' }}>
                        <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h2 className="fw-bold mb-2 text-uppercase">Crear Ficha</h2>
                            <p className="text-dark-50 mb-5">Ingrese los siguientes campos</p>
                            <div className="fields">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formNombre">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control
                                                name="nombre"
                                                value={ficha.nombre}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formCodigo">
                                            <Form.Label>Codigo</Form.Label>
                                            <Form.Control
                                                name="codigo"
                                                value={ficha.codigo}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formTipo">
                                            <Form.Label>Tipo</Form.Label>
                                            <Form.Control
                                                name="tipo"
                                                value={ficha.tipo}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formUsuario">
                                            <Form.Label>Usuario</Form.Label>
                                            <Form.Control as="select"
                                                name="usuario"
                                                value={ficha.usuario}
                                                onChange={handleInputChange}
                                            >
                                                <option>Seleccione Usuario</option>
                                                {usuarios.map(u => (
                                                    <option key={u._id} value={u._id}>{u.nombre}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formFechaInicio">
                                            <Form.Label>Fecha de Inicio</Form.Label>
                                            <Form.Control
                                                name="fecha_inicio"
                                                value={ficha.fecha_inicio}
                                                onChange={handleInputChange}
                                                type="date"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formFechaFin">
                                            <Form.Label>Fecha de Fin</Form.Label>
                                            <Form.Control
                                                name="fecha_fin"
                                                value={ficha.fecha_fin}
                                                onChange={handleInputChange}
                                                type="date"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGestor">
                                            <Form.Label>Gestor</Form.Label>
                                            <Form.Control as="select"
                                                name="gestor"
                                                value={ficha.gestor}
                                                onChange={handleInputChange}
                                            >
                                                <option>Seleccione Gestor</option>
                                                {gestores.map(g => (
                                                    <option key={g._id} value={g._id}>{g.nombre}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                       
                                    </Col>
                                </Row>
                            </div>
                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Crear
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default List;
