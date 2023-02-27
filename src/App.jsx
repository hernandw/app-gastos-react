import React, { useState } from "react";
import "./index.css";

import Header from "./components/Header";

const App = () => {
  const [presupuesto, setPresupuesto] = useState('');
  const [isValidBudget, setIsValidBudget] = useState(false);
  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
    </div>
  );
};

export default App;
