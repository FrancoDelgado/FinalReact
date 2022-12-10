import React from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContext, useEffect } from 'react'
import { ContextoGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const {state ,disach} = useContext(ContextoGlobal);

const data = () => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  
  .then(res => {
    disach({type: "DATA", payload: res.data})
  })

  .catch(error => console.log("Ocurrio un Error", error))
}

useEffect(() => {
  data()

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])



  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map((odontologo) => <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />)}
      </div>
    </main>
  )
}

export default Home