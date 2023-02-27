import React from 'react'
import { formatea} from '../helpers/formatCoin' 

const ControlPresupuesto = ({presupuesto}) => {
    const cantidad = presupuesto
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica Aqui</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
            <span>Presupuesto: </span> {formatea(cantidad)}
        </p>
        <p>
            <span>Disponible: </span> {formatea(cantidad)}
        </p>
        <p>
            <span>Gastado: </span> {formatea(cantidad)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
