import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {

  const [odontologo, setOdontologo] = useState(null);

  const {id} = useParams();

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setOdontologo(res.data))

    .catch(error => console.log(error));

}, [id]);


// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico



  return (
    <>
      <h1>Detalles del odontologo {id} </h1>
      <table>

        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Sitio web</th>
        </tr>


        <tr>
          <td>{odontologo?.name}</td>
          <td>{odontologo?.email}</td>
          <td>{odontologo?.phone}</td>
          <td>{odontologo?.sitioweb}</td>
        </tr>
      
      </table>
    </>
  )
}

export default Detail