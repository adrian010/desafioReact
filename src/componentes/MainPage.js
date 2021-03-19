import { useState, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Graficos from "./graficos";

import EdituserForm from "./EditUserForm";

//import MOCK_DATA from './MOCKDATA.json';
import Pagination from "./Pagination";
import axios from "axios";

function MainPage() {
  const [datos, setDatos] = useState([]);

  const [showAccesos, setShowAccesos] = useState(false);

  const closeAccesos = () => setShowAccesos(false);
  const openAccesos = () => setShowAccesos(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [usuarios, setUsuarios] = useState([]);

  const [usuarioActual, setUsuarioActual] = useState({
    id: "",
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    fechaAlta: "",
    direccion: "",
    datos: "",
  });

  const fetchUser = async () => {
    const { data } = await axios("MOCKDATA.json");
    setUsuarios(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const editarUsuario = (usuario) => {
    setUsuarioActual({
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      dni: usuario.dni,
      email: usuario.email,
      fechaAlta: usuario.fechaAlta,
      direccion: usuario.direccion,
      datos: usuario.datos,
    });

    handleShow();
  };

  const accesos = (datos) => {
    setDatos(datos);
    openAccesos();
  };

  // const agregarUsuario = (usuario) =>{
  //   usuario.id = uuidv4()
  //   setUsuarios([
  //     ...usuarios,
  //     usuario
  //   ])
  // }

  const eliminarUsuario = (id) => {
    console.log(id);
    const filtroUsuario = usuarios.filter((usuario) => usuario.id !== id);

    setUsuarios(filtroUsuario);
  };

  const actualizarUsuario = (id, usuarioActualizado) => {
    setUsuarios(
      usuarios.map((usuario) =>
        usuario.id === id ? usuarioActualizado : usuario
      )
    );
  };

  return (
    <>
      <Pagination
        usuarios={usuarios}
        eliminarUsuario={eliminarUsuario}
        editarUsuario={editarUsuario}
        accesos={accesos}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EdituserForm
            usuarioActual={usuarioActual}
            actualizarUsuario={actualizarUsuario}
            handleClose={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showAccesos}
        onHide={closeAccesos}
        //backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Accesos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Graficos datos={datos} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAccesos}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* </div> */}
    </>
  );
}

export default MainPage;
