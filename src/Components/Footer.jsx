import React from 'react'
import { useContext } from "react";
import { ContextoGlobal } from "../Components/utils/global.context"


const Footer = () => {

useContext(ContextoGlobal)


  return (
    <footer>
      <button className='volverArriba' onClick={() => {window.scrollTo({top: 0, behavior: "auto"})}}>Volver Arriba</button>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
        <div className='contenedorRedesSociales'>
          <a href="https://www.facebook.com"><img src="../public/images/ico-facebook.png" alt="Logo de Facebook" /></a>
          <a href="https://www.instagram.com"><img src="../public/images/ico-instagram.png" alt="Logo de Instagram" /></a>
          <a href="https://www.tiktok.com"><img src="../public/images/ico-tiktol.png" alt="Logo de Tik Tok" /></a>
          <a href="https://www.whatsapp.com"><img src="../public/images/ico-whatsapp.png" alt="Logo de Whatsapp" /></a>
        </div>
    </footer>
  )
}

export default Footer
