import { Card, Button, Spinner, Col, Container, Form, Row, Image, Alert } from 'react-bootstrap'
import '../EditarProyecto/list.css'

function List() {
    return (
        <div className="cardp">
            {/* Agrupa las cards en contenedores de filas */}
            <div className="card-row">
                <Card className="custom-card">
                    <Card.Body class="p">
                        <br />
                        <Card.Title className="titulo">Create</Card.Title>
                        <div class="fields">
                            <div class="input-field">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Nombre de la ficha"
                                    name="nombre"
                                />
                            </div>
                            <div class="input-field">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Codigo de la ficha"
                                    name="codigo"
                                />
                            </div>
                            <div class="input-field">
                                <Form.Label>Tipo</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Tipo de la ficha"
                                    name="tipo"
                                />
                            </div>
                            <div class="input-field">
                                <Form.Label> Fecha Inicio </Form.Label>

                                <Form.Control type="date" name="fecha_inicio" />
                            </div>
                            
                            <div class="input-field">
                                <Form.Label> Fecha Fin </Form.Label>

                                <Form.Control type="date" name="fecha_fin" />
                            </div>
                            
                        </div>
                        <br/>
                        <center>
                                <Button className="Buttonn">Crear</Button>
                            </center>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default List;