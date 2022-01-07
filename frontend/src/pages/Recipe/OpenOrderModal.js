import { useState } from "react";
import Modal from "react-modal";

import { Button, AlertButton } from "./styles";

const customStyles = {
  content: {
    top: "35%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "40%",
    heigth: "200px",
    transform: "translate(-40%, -10%)",
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

export default function OpenOrderModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Iniciar preparação</Button>
      {show ? (
        <Modal isOpen={show} onRequestClose={handleClose} style={customStyles} ariaHideApp={false}>
          <div>
            Para iniciar a preparação, certifique-se de que você tem todos os
            ingredientes selecionados.
          </div>
          <AlertButton onClick={handleClose}>Entendi</AlertButton>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
