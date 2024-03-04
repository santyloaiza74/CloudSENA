import { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import '../EditarProyecto/list.css';

function List() {
    // Estado para almacenar los valores del formulario y las opciones de gestores y usuarios
    const [ficha, setFIcha] = useState({
        nombre: '',
        codigo: '',
        tipo: '',
        fecha_inicio: '',
        fecha_fin: '',
        gestor: '', // Nuevo campo para el gestor seleccionado
        usuario: '', // Nuevo campo para el usuario seleccionado
    });

    const [gestores, setGestores] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // Cargar opciones de gestores y usuarios al montar el componente
        axios.get('http://127.0.0.1:3300/api/v1/gestor')  // Reemplaza '/api/gestores' con tu endpoint real
            .then(response => setGestores(response.data.gestors))
            .catch(error => console.error('Error fetching gestores:', error));

        axios.get('http://127.0.0.1:3300/login')  // Reemplaza '/api/usuarios' con tu endpoint real
            .then(response => setUsuarios(response.data.users))
            .catch(error => console.error('Error fetching usuarios:', error));
    }, []);

    // Función de manejo de cambios para los campos del formulario
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async () => {
        try {
            axios.post('http://127.0.0.1:3300/api/v1/ficha', ficha)
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
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFIcha(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="cardp">
            <div className="card-row">
                <Card className="custom-card">
                    <Card.Body className="p">
                        <br />
                        <Card.Title className="titulo">Create</Card.Title>
                        <div className="fields">
                            <div className="input-field">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Nombre de la ficha"
                                    name="nombre"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-field">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Codigo de la ficha"
                                    name="codigo"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-field">
                                <Form.Label>Tipo</Form.Label>
                                <Form.Control
                                    type="input"
                                    placeholder="Tipo de la ficha"
                                    name="tipo"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-field">
                                <Form.Label> Fecha Inicio </Form.Label>
                                <Form.Control
                                    type="date"
                                    name="fecha_inicio"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-field">
                                <Form.Label> Fecha Fin </Form.Label>
                                <Form.Control
                                    type="date"
                                    name="fecha_fin"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-field">
                                <Form.Label>Gestor</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="gestor"
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar Gestor</option>
                                    {gestores.map(gestor => (
                                        <option key={gestor._id} value={gestor._id}>
                                            {gestor.nombre}
                                        </option>
                                    ))}
                                </Form.Control>
                            </div>

                            <div className="input-field">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="usuario"
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccionar Usuario</option>
                                    {usuarios.map(usuario => (
                                        <option key={usuario._id} value={usuario._id}>
                                            {usuario.nombre}
                                        </option>
                                    ))}
                                </Form.Control>
                            </div>
                        </div>
                        <br />
                        <center>
                            <Button className="Buttonn" onClick={handleSubmit}>
                                Crear
                            </Button>
                        </center>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default List;
