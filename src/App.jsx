import React, { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import nuevogasto from "./assets/img/nuevo-gasto.svg";
import Modal from "./components/MOdal";

const App = () => {
  const [presupuesto, setPresupuesto] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const handleNuevoGasto = () => {
    console.log("Diste click");
    setModal(true)
    
  }
  
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className="nuevo-gasto">
          <img src={nuevogasto} alt="Nuevo Gasto" onClick={handleNuevoGasto} />
        </div>
      )}
      {modal && <Modal />}
    </div>
  );
};

export default App;
