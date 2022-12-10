import React, { useContext } from 'react'
import { ContextoGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { dispach, state } = useContext(ContextoGlobal)

  const cambioDeTema = () => {

    dispach({type : "tema", payload: state.tema === "CLARO" ? "OSCURO" : "CLARO"})

  }



  return (
    <nav>
      <div>
        <h1>DH Odontologo</h1>
        <nav>
          <Link to = {"/"}>Home</Link>
          <Link to = {"/favoritos"}>Favoritos</Link>
          <Link to = {"/contact"}>Contactos</Link>
        </nav>
      </div>
      <button onClick={cambioDeTema}>{state.tema === "CLARO" ? "Tema Oscuro" : "Tema Claro"}</button>
    </nav>
  )
}

export default Navbar
