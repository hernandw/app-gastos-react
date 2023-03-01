import React from "react";
import cerrarModal from "../assets/img/cerrar.svg";

const Modal = () => {
  const ocultarModal = () => {
    console.log("mejorandola...");
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={cerrarModal}
          alt="Cerrar"
          onClick={ocultarModal}
        />
      </div>
    </div>
  );
};

export default Modal;
