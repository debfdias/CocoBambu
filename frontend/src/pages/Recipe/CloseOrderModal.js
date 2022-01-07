import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { useTimer } from "../../providers/Timer";
import { showTotalTime } from "../../services/utils";
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

export default function CloseOrderModal() {
  const [show, setShow] = useState(false);
  const { time, setTime, setStartTimer } = useTimer();
  const history = useHistory();

  const handleClose = () => {
    setShow(false);
    setTime(0);
    history.push("/recipes");
  }

  const handleShow = () => {
    setShow(true);
    setStartTimer(false);
  }

  return (
    <>
      <Button onClick={handleShow}>Finalizar</Button>
      {show ? (
        <Modal isOpen={show} onRequestClose={handleClose} style={customStyles} ariaHideApp={false}>
          <div>
            Prato finalizado ccom sucesso em {showTotalTime(time)}!
          </div>
          <AlertButton onClick={handleClose}>Ok</AlertButton>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
