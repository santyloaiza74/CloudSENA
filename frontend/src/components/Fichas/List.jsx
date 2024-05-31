import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner, Row, Col, Pagination } from 'react-bootstrap';
import { CDBBtn, CDBIcon, CDBContainer } from "cdbreact";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './list.css'; // Asegúrate de tener el archivo CSS correcto
import logo1 from './../../img/logo1.png';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

function EditarF() {
    const [ficha, setFicha] = useState([]);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 8; // Define la cantidad deseada de elementos por página
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios
            .get(`https://cloudsena-itj7.onrender.comapi/v1/ficha`)
            .then((response) => {
                setFicha(response.data.fichas);
                console.log(response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching fichas:', error);
                setLoading(false);
            });
    }, []);

    const totalPages = Math.ceil(ficha.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = ficha.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const navigate = useNavigate();

const handleEdit = (id) => {
    navigate(`/editarFicha/${id}`);
};  

    return (

        <div className="list-container">
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <div>
                    <center>
                        <CDBBtn className='Buttonn' href='/ficha'>
                            <CDBIcon icon="fa-solid fa-plus" className="ms-1" />
                            Crear Fichas
                        </CDBBtn>
                    </center>
                    <Row>
                        {currentItems.map(({ _id, nombre, fecha_inicio, fecha_fin }) => (
                            <Col key={_id} md={6}>
                                <Card className="mb-3">
                                    {/* <Card.Img variant="top" src={logo1} alt={`${nombre} Image`} /> */}
                                    <Card.Body>
                                        <Card.Title>{nombre}</Card.Title>
                                        <Card.Text>
                                            <strong>Fecha Inicio:</strong> {fecha_inicio}<br />
                                            <strong>Fecha Fin:</strong> {fecha_fin}<br />
                                        </Card.Text>
                                        <CDBBtn className='Buttonn'>
                                            <CDBIcon icon="fa-solid fa-eye" className="ms-1" />
                                            Ver Detalles
                                        </CDBBtn>
                                        <CDBBtn className='Buttonn' onClick={() => handleEdit(_id)}>
                                            <CDBIcon icon="fa-solid fa-edit" className="ms-1" />
                                            Editar
                                        </CDBBtn>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="pagination-container">
                        <Pagination>
                            <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
                            {[...Array(totalPages).keys()].map((pageNumber) => (
                                <Pagination.Item
                                    key={pageNumber + 1}
                                    active={pageNumber + 1 === currentPage}
                                    onClick={() => handlePageChange(pageNumber + 1)}
                                >
                                    {pageNumber + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages} />
                        </Pagination>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditarF;
