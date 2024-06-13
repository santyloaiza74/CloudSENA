import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown, Container, Row, Col, Card } from "react-bootstrap";
import { CDBBtn, CDBIcon, CDBContainer } from "cdbreact";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './cproyectos.css'; // Asegúrate de crear este archivo para las clases CSS adicionales
import URL from "../../constants/api";

function SubirArchivos() {
    const [projectData, setProjectData] = useState({
        projectName: "",
        autores: "",
        ficha: "",
        fecha: "",
        descripcion: "",
    });
    const navigate = useNavigate();
    const [documentacionFiles, setDocumentacionFiles] = useState([]);
    const [imagenFiles, setImagenFiles] = useState([]);
    const [videoFiles, setVideoFiles] = useState([]);
    const [fichas, setFichas] = useState([]);

    useEffect(() => {
        axios.get(`${URL.API}/api/v1/ficha`)
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
            default:
                break;
        }
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

        axios.post(`${URL.API}/api/v1/proyecto`, formData)
            .then(response => {
                console.log(response.data);
                alert("Proyecto creado con exito");
                navigate('/');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    return (
        <Container fluid className="my-4">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className='carddddd' style={{ borderRadius: '1rem' }}>
                        <Card.Body className='p-4'>
                            <h2 className="fw-bold mb-2 text-uppercase text-center">Crear Proyecto</h2>
                            <p className="text-dark-50 mb-4 text-center">Ingrese los siguientes campos</p>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="formProjectName" className="mb-3">
                                            <Form.Label>Nombre del Proyecto</Form.Label>
                                            <Form.Control type="text" name="projectName" value={projectData.projectName} onChange={handleInputChange} placeholder="Nombre del proyecto" />
                                        </Form.Group>
                                        <Form.Group controlId="formAutores" className="mb-3">
                                            <Form.Label>Autores</Form.Label>
                                            <Form.Control type="text" name="autores" value={projectData.autores} onChange={handleInputChange} placeholder="Autores del proyecto" />
                                        </Form.Group>
                                        <Form.Group controlId="formFicha" className="mb-3">
                                            <Form.Label>Ficha</Form.Label>
                                            <Form.Control as="select" name="ficha" value={projectData.ficha} onChange={handleInputChange}>
                                                <option value="">Seleccionar Ficha</option>
                                                {fichas.map(ficha => (
                                                    <option key={ficha._id} value={ficha._id}>{ficha.nombre}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formDescripcion" className="mb-3">
                                            <Form.Label>Descripción</Form.Label>
                                            <Form.Control as="textarea" name="descripcion" value={projectData.descripcion} onChange={handleInputChange} placeholder="Descripción del proyecto" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group controlId="formFecha" className="mb-3">
                                            <Form.Label>Fecha</Form.Label>
                                            <Form.Control type="date" name="fecha" value={projectData.fecha} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formDocumentacion" className="mb-3">
                                            <Form.Label>Subir Documentación</Form.Label>
                                            <Form.Control type="file" multiple onChange={(event) => handleFileChange(event, 'documentacion')} />
                                        </Form.Group>
                                        <Form.Group controlId="formImagen" className="mb-3">
                                            <Form.Label>Subir Imágenes</Form.Label>
                                            <Form.Control type="file" multiple onChange={(event) => handleFileChange(event, 'imagen')} />
                                        </Form.Group>
                                        <Form.Group controlId="formVideo" className="mb-3">
                                            <Form.Label>Subir Video</Form.Label>
                                            <Form.Control type="file" multiple onChange={(event) => handleFileChange(event, 'video')} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="text-center mt-4">
                                    <center>
                                    <CDBBtn type="submit" className="Buttonn">
                                        <CDBIcon icon="fa-solid fa-plus" className="ms-1" />
                                        Crear Proyecto
                                    </CDBBtn>
                                    </center>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SubirArchivos;
