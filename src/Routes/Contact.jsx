import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='Contacos'>
      <h2>Quieres saber mas?</h2>
      <p>Mandanos tus preguntas y nos contactaremos contigo</p>
      <Form/>
    </div>
  )
}

export default Contact