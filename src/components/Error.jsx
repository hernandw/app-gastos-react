import React from 'react'

const Error = ({children, tipo}) => {
  return (
    <div>
      <p className={`alerta ${tipo}`}>{children}</p>
    </div>
  )
}

export default Error
