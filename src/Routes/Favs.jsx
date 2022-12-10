import React, { useContext } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";
import { ContextoGlobal } from "../Components/utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const tomarFavoritosDeLocalStorage = () => {

    const favoritos = localStorage.getIteme("favoritos");
  
    return favoritos ? JSON.parse(favoritos) : [];
  
  };
  
  const {state, dispach} = useContext(ContextoGlobal)

  useEffect(() => {
    const fav = tomarFavoritosDeLocalStorage();

    dispach({type: "FAV", payload: fav});

  },[dispach, state.flag])

  return (
    <>
      <h1>Odontologos Favoritos</h1>
      <div className="card-grid">
          {state.favorito.map((odontologo) => <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id}/>)}
      </div>
    </>
  );
};

export default Favs;
