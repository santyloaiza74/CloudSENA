import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { CDBBtn, CDBIcon, CDBContainer } from "cdbreact";
import axios from 'axios';
import QRCode from 'qrcode.react';
import logo2 from '../../img/logo2.webp';

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
  const [currentURL, setCurrentURL] = useState('');
  const [showQRModal, setShowQRModal] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.HOST}/api/v1/proyecto/${id}`)
      .then(res => {
        setProjectDetails(res.data.proyecto);
        if (res.data.proyecto.ficha) {
          getFichaName(res.data.proyecto.ficha);
        }
      })
      .catch(err => console.log(err));

    setCurrentURL(window.location.href);
  }, [id]);

  const getFichaName = (fichaId) => {
    axios.get(`${process.env.HOST}/api/v1/ficha/${fichaId}`)
      .then(res => {
        setFichaName(res.data.ficha.nombre);
      })
      .catch(err => console.log(err));
  };

  const handleCloseQRModal = () => setShowQRModal(false);
  const handleShowQRModal = () => setShowQRModal(true);

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className='cardddd' style={{ borderRadius: '1rem', maxWidth: '9000000px' }}>
            
            <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">{projectDetails.nombre}</h2>
              <p className="text-dark-50 mb-5">Información detallada del proyecto</p>
              <Card.Img className='ImgP' crossorigin="anonymous" variant="top" src={projectDetails.imagenes} alt={`${projectDetails.nombre} Image`}></Card.Img>
              <br />
              <Card.Text>
                <strong>Autores:</strong> {projectDetails.autores}<br />
                <strong>Ficha:</strong> {fichaName}<br />
                <strong>Fecha:</strong> {projectDetails.fecha}<br />
                <center>
                  <strong></strong> {projectDetails.descripcion}<br />
                </center>
                <br />
                <video width={700} height={400} crossorigin="anonymous" variant="top" src={projectDetails.video} alt={`${projectDetails.nombre} Image`} controls></video>
                <br />
                <br />
                <br />

                  <img className='ImgD' crossorigin="anonymous" variant="top" src={logo2} alt={`${projectDetails.nombre} Image`} href={projectDetails.documentacion}></img>
                  <a className='aD' crossOrigin='anonymus' href={projectDetails.documentacion}> Descargar Documentación</a>

              </Card.Text>
              {/* Agregamos un botón para abrir el modal */}
              <CDBBtn className='Buttonnn' onClick={handleShowQRModal} style={{ borderRadius: '1rem', width: 'auto', height: '50px', position: 'absolute', bottom: '20px', right: '20px' }} >
                <CDBIcon icon="fa-solid fa-qrcode" className="Icono"  ></CDBIcon>
                  Generar QR
              </CDBBtn>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal para mostrar el código QR */}
      <Modal show={showQRModal} onHide={handleCloseQRModal}>
        <Modal.Header closeButton>
          <Modal.Title>Código QR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <QRCode value={currentURL} />
          </center>
        </Modal.Body>
        <Modal.Footer>
          <CDBBtn className='Buttonn' onClick={handleCloseQRModal} >
            <CDBIcon icon="fa-solid fa-minus" className="Icono"  ></CDBIcon>
            Cerrar
          </CDBBtn>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DetailPage;
