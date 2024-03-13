import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown, Container, Row, Col, Card } from "react-bootstrap";
import axios from 'axios';

function SubirArchivos() {
    const [projectData, setProjectData] = useState({
        projectName: "",
        autores: "",
        ficha: "",
        fecha: "",
        descripcion: "",
    });

    const [documentacionFiles, setDocumentacionFiles] = useState([]);
    const [imagenFiles, setImagenFiles] = useState([]);
    const [videoFiles, setVideoFiles] = useState([]);
    const [fichas, setFichas] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3300/api/v1/ficha')
            .then(response => {
                setFichas(response.data.fichas);
            })
            .catch(error => {
                console.error('Error al obtener las fichas:', error);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProjectData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (event, fileType) => {
        const files = [...event.target.files];

        switch (fileType) {
            case 'documentacion':
                setDocumentacionFiles(files);
                break;
            case 'imagen':
                setImagenFiles(files);
                break;
            case 'video':
                setVideoFiles(files);
                break;
            // Puedes agregar más casos según sea necesario
            default:
                break;
        }
    };

    const handleFichaSelect = (fichaId, fichaNombre) => {
        setProjectData(prevData => ({
            ...prevData,
            ficha: fichaId
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("projectName", projectData.projectName);
        formData.append("autores", projectData.autores);
        formData.append("ficha", projectData.ficha);
        formData.append("fecha", projectData.fecha);
        formData.append("descripcion", projectData.descripcion);

        documentacionFiles.forEach((file) => {
            formData.append("files", file);
        });

        imagenFiles.forEach((file) => {
            formData.append("files", file);
        });

        videoFiles.forEach((file) => {
            formData.append("files", file);
        });

        axios.post('http://127.0.0.1:3300/api/v1/proyecto', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className='cardddd' style={{ borderRadius: '1rem', maxWidth: '90000px' }}>
                        <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h2 className="fw-bold mb-2 text-uppercase">Crear Proyecto</h2>
                            <p className="text-dark-50 mb-5">Ingrese los siguientes campos</p>
                            <Row>
                                <Col md={6}>
                                    {/* Primera columna */}
                                    <Form.Group controlId="formProjectName">
                                        <Form.Label>Nombre del Proyecto</Form.Label>
                                        <Form.Control type="text" name="projectName" value={projectData.projectName} onChange={handleInputChange} placeholder="Nombre del proyecto" />
                                    </Form.Group>
                                    <Form.Group controlId="formAutores">
                                        <Form.Label>Autores</Form.Label>
                                        <Form.Control type="text" name="autores" value={projectData.autores} onChange={handleInputChange} placeholder="Autores del proyecto" />
                                    </Form.Group>
                                    <Form.Group controlId="formFicha">
                                        <Form.Label>Ficha</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="ficha"
                                            value={projectData.ficha}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Seleccionar Ficha</option>
                                            {fichas.map(ficha => (
                                                <option key={ficha._id} value={ficha._id}>{ficha.nombre}</option>
                                            ))}
                                        </Form.Control>

                                    </Form.Group>
                                    {/* Segunda columna */}
                                    <Form.Group controlId="formDescripcion">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control as="textarea" name="descripcion" value={projectData.descripcion} onChange={handleInputChange} placeholder="Descripción del proyecto" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    {/* Tercera columna */}
                                    <Form.Group controlId="formFecha">
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control type="date" name="fecha" value={projectData.fecha} onChange={handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formDocumentacion" multiple>
                                        <Form.Label>Subir Documentación</Form.Label>
                                        <Form.Control type="file" onChange={(event) => handleFileChange(event, 'documentacion')} />
                                    </Form.Group>
                                    <Form.Group controlId="formImagen" multiple>
                                        <Form.Label>Subir Imágenes</Form.Label>
                                        <Form.Control type="file" onChange={(event) => handleFileChange(event, 'imagen')} />
                                    </Form.Group>
                                    <Form.Group controlId="formVideo" multiple>
                                        <Form.Label>Subir Video</Form.Label>
                                        <Form.Control type="file" onChange={(event) => handleFileChange(event, 'video')} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br/>
                            <Button variant="primary" type="submit" onClick={handleSubmit}> 
                                Subir Archivos
                            </Button>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SubirArchivos;
