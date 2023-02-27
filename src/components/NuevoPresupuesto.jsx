import React, { useState } from "react";
import Error from "./Error";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidBudget,
}) => {
  const [mensaje, setMensaje] = useState(false);
  const handleStubmit = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje(true);
      return;
    }
    setMensaje(false);
    setIsValidBudget(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleStubmit} className="formulario">
        <div className="campo">
          <label htmlFor="name">Definir Presupuesto</label>
          <input
            id="name"
            type="number"
            placeholder="Añade tu presupuesto"
            className="nuevo-presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Error tipo="error">No es un presupuesto válido</Error>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
