// DetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import logo2 from '../../img/logo2.webp'

function DetailPage() {
  const { id } = useParams();

  const [projectDetails, setProjectDetails] = useState({
    nombre: '',
    autores: '',
    ficha: '',
    fecha: '',
    descripcion: '',
    imagenes: [],
    documentacion: '',
    video: '',
  });

  
const [fichaName, setFichaName] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3300/api/v1/proyecto/${id}`)
      .then(res => {
        setProjectDetails(res.data.proyecto);
        console.log(projectDetails)
        if (res.data.proyecto.ficha) {
            getFichaName(res.data.proyecto.ficha);
          }
        })
        .catch(err => console.log(err));
    }, [id]);
  
    // Función para obtener el nombre de la ficha
    const getFichaName = (fichaId) => {
      axios.get(`http://localhost:3300/api/v1/ficha/${fichaId}`)
        .then(res => {
          setFichaName(res.data.ficha.nombre);
          console.log(fichaName)
        })
        .catch(err => console.log(err));
    };

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className='cardddd' style={{ borderRadius: '1rem', maxWidth: '9000000px' }}>
            <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">{projectDetails.nombre}</h2>
              <p className="text-dark-50 mb-5">Información detallada del proyecto</p>
              <Card.Img className='ImgP' crossorigin="anonymous" variant="top" src={projectDetails.imagenes} alt={`${projectDetails.nombre} Image`}></Card.Img>
              <br/>
              <Card.Text>
                <strong>Autores:</strong> {projectDetails.autores}<br />
                <strong>Ficha:</strong> {fichaName}<br />
                <strong>Fecha:</strong> {projectDetails.fecha}<br />
                <center>
                <strong></strong> {projectDetails.descripcion}<br />
                </center>
                <br/>
                <video width={700} height={400} crossorigin="anonymous" variant="top" src={projectDetails.video} alt={`${projectDetails.nombre} Image`} controls></video>
                <br/>
                <br/>
                <br/>
                <center>
                <img className='ImgD' crossorigin="anonymous" variant="top" src={logo2} alt={`${projectDetails.nombre} Image`} href={projectDetails.documentacion}></img>
                <a  className='aD' crossOrigin='anonymus' href={projectDetails.documentacion}> Descargar Documentación</a>
                </center>
            
                
                {/* Agrega aquí la lógica para mostrar las imágenes, documentación y video */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailPage;
