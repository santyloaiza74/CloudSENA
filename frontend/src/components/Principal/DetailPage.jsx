import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button, Modal, FormGroup, Form} from 'react-bootstrap';
import { CDBBtn, CDBIcon } from "cdbreact";
import axios from 'axios';
import QRCode from 'qrcode.react';
import { Document, Page } from '@react-pdf/renderer';
import './DetailPage.css'; // Importa el archivo CSS
import URL from '../../constants/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
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
  const [codigo, setCodigo] = useState('')
  console.log(codigo);
  const [fichaName, setFichaName] = useState('');
  const [currentURL, setCurrentURL] = useState('');
  const [showQRModal, setShowQRModal] = useState(false);
  const [showDeletemodal, setShowDeletemodal] = useState(false);
  useEffect(() => {
    axios.get(`${URL.API}/api/v1/proyecto/${id}`)
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
    axios.get(`${URL.API}/api/v1/ficha/${fichaId}`)
      .then(res => {
        setFichaName(res.data.ficha.nombre);
      })
      .catch(err => console.log(err));
  };
  const sendCorreo = () => {
    axios.post(`${URL.API}/api/v1/proyecto/${id}/send-code`)
     .then(res => console.log(res),
    )
     .catch(err => console.log(err));
  }
  const deleteProyecto = () =>{
    axios.delete(`${URL.API}/api/v1/proyecto/${id}?confirmationCode=${codigo}`)
     .then(res => {
      console.log(res);
      alert("Proyecto Eliminado con Exito");
     })
     .catch(err => console.log(err));
  }
  const handleInputChange = (e) => {
    const {value} = e.target
    setCodigo(value)
  };

  const handleCloseQRModal = () => setShowQRModal(false);
  const handleShowQRModal = () => setShowQRModal(true);
  const handleshowdeletemodal = () => {
    setShowDeletemodal(true);
    sendCorreo();
  }
  const handleClosedeletemodal = () => setShowDeletemodal(false);

  return (
    <Container fluid className="detail-page-container">
      <Row className="justify-content-center">
        <Col xs={12} lg={8}>
          <Card className="shadow-sm detail-page-card">
            <Card.Body className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">{projectDetails.nombre}</h2>
              <p className="text-dark-50 mb-5">Información detallada del proyecto</p>
              {projectDetails.imagenes.length > 0 && (
                <Card.Img className="detail-page-img mb-3" src={projectDetails.imagenes[0]} alt={`${projectDetails.nombre} Image`} />
              )}
              <Card.Text>
                <strong>Autores:</strong> {projectDetails.autores}<br />
                <strong>Ficha:</strong> {fichaName}<br />
                <strong>Fecha:</strong> {projectDetails.fecha}<br />
                <strong>Descripción:</strong> {projectDetails.descripcion}
              </Card.Text>
              {projectDetails.video && (
                <div className="detail-page-video-container my-3">
                  <video className="detail-page-video" src={projectDetails.video} controls></video>
                </div>
              )}
              {projectDetails.documentacion && (
                <div className="my-3">
                  <CDBBtn className="Buttonn" onClick={() => window.open(projectDetails.documentacion, '_blank')}>
                    <CDBIcon icon="qrcode" />
                    Documentacion
                  </CDBBtn>


                </div>
              )}
              <CDBBtn className="Buttonnn mt-3" onClick={handleShowQRModal}>
                <CDBIcon icon="qrcode" />
                Generar QR
              </CDBBtn>
              <CDBBtn className="buttonn mt-3" onClick={handleshowdeletemodal}>
                Eliminar
              </CDBBtn>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showQRModal} onHide={handleCloseQRModal}>
        <Modal.Header closeButton>
          <Modal.Title>Código QR</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <QRCode value={currentURL} />
        </Modal.Body>
        <Modal.Footer>
          <CDBBtn className="Buttonn" onClick={handleCloseQRModal}>
            <CDBIcon icon="times" />
            Cerrar
          </CDBBtn>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeletemodal} onHide={handleClosedeletemodal}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Se envio un correo al gestor con el codigo de eliminacion</p>
          <FormGroup>
            <Form.Label>Ingrese el codigo:</Form.Label>
            <Form.Control  type="text" name="codigo" onChange={handleInputChange} placeholder="Nombre del proyecto" />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <CDBBtn className="Buttonn" onClick={handleClosedeletemodal}>
            <CDBIcon icon="times" />
            Cerrar
          </CDBBtn>
          <CDBBtn className="Buttonn" onClick={deleteProyecto}>
            <CDBIcon icon="check" />
            Eliminar
          </CDBBtn>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DetailPage;
