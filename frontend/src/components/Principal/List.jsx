import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner, Pagination } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './list.css';
import logo1 from './../../img/logo1.png';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

function List() {
  const [proyecto, setProyecto] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 5; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3300/api/v1/proyecto')
      .then((response) => {
        setProyecto(response.data.proyectos);
        console.log(response)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  // Calcular el índice de inicio y fin de la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener la lista de proyectos para la página actual
  const currentProjects = proyecto.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(proyecto.length / itemsPerPage);

  // Manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleDetailsClick = (projectId) => {
    navigate(`/details/${projectId}`);
  };

  return (
    <div className="card-container">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <div className="card-row">
            {currentProjects.map(({ _id, nombre, autores, ficha, fecha, imagenes, ruta }) => (
              <Card key={_id} className="custom-card-style" style={{maxWidth: '900000px'}}>
                <Card.Body>
                  <Card.Img crossorigin="anonymous" variant="top" src={imagenes} alt={`${nombre} Image`}/>
                  <Card.Title>{nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{autores}</Card.Subtitle>
                  <Card.Text>
                    <strong>Ficha:</strong> {ficha[0].nombre}<br />
                    <strong>Fecha:</strong> {fecha}<br />
                    <strong>Ruta:</strong> {ruta}
                  </Card.Text>
                  <Button className="Buttonn" onClick={() => handleDetailsClick(_id)}>Ver Detalles</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination className="mt-3">
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages).keys()].map((pageNumber) => (
                <Pagination.Item
                  key={pageNumber + 1}
                  active={pageNumber + 1 === currentPage}
                  onClick={() => handlePageChange(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          )}
        </>
      )}
    </div>
  );
}

export default List;
