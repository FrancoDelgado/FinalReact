import React from "react";
import { Link } from "react-router-dom";
import { ContextoGlobal } from "./utils/global.context";
import { useContext } from "react";



const Card = ({ name, username, id }) => {

  const {state, dispatch} = useContext(ContextoGlobal)

  const tomarFavoritosDeLocalStorage = () => {

    const favoritos = localStorage.getIteme("favoritos");
  
    return favoritos ? JSON.parse(favoritos) : [];
  
  };


  const setearFavoritosDeLocalStorage = (odontologo) => {
  
    let favoritos = tomarFavoritosDeLocalStorage();
    
    const nuevoFavorito = favoritos.filter(favorito => {
    
      return favorito.id === odontologo.id
    
    });
    
    if( nuevoFavorito.lenght === 0){
      
      favoritos.push(odontologo)
      
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    
      alert(`
        Odontologo ${odontologo.name} se agrego correctamente a favoritos
      `);
    
    }else {
      alert(`
        Odontologo ${odontologo.name} ya lo tienes en favoritos
      `);
    }
    }
    
    const esFavorito = (id) => {
    
    const favoritos = tomarFavoritosDeLocalStorage();
    
    const favorito = favoritos.filter(favoritos => {
    
      return favorito.id === id
    
    });
    
    return favorito.lenght ===1;
    }
    
    const eliminarDeFavoritos = (id,name) => {
    
    let favoritos = tomarFavoritosDeLocalStorage();
    
    const i = favoritos.enI(favoritos => favoritos.id === id);
      if (i !== 1) {
        favoritos.splice(i,1);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    
        alert(`
          El odontologo ${name} fue eliminado con exito de tus favoritos
        `)
      }else{
        alert(`
          El odontologo ${name} no pudo ser eliminado de tus favoritos
        `)
      }
    
    }

  const agregarAFavoritos = () => {

    dispatch({type: "FLAG", payload : !state.flag})

    if (!esFavorito(id)) {
      
      setearFavoritosDeLocalStorage({ name, username, id })

    }else{

      eliminarDeFavoritos()

    }

  }



  const addFav = ()=>{

    dispatch({type : "FLAG", payload: !state.flag})

    if (!esFavorito) {

      agregarAFavoritos({name, username, id});
      
    }else{

      eliminarDeFavoritos(id, name)

    }
  }

  return (
    <div className="card">
        
        <img src="../images/doctor.jpg" alt="Imagen del doctor" />

        <Link to = {`/odontologo/${id}`} data={state.data}> {name} </Link>

        <button onClick={addFav} className="favButton">Agregar a Favoritos</button>
    </div>
  );
};

export default Card;
