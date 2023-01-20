import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css"

const Detail = () => {
    const { detailID } = useParams()
    const [ character , setCharacter ] = useState({})


     
useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailID}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [detailID])
    return(
      <>
      <button className={style.boton}>
               <Link to="/home" >HOME</Link>
            </button>
        <div className={style.contain}>
            
            <div className={style.detail}>
          <h1>Detail</h1>
          <h2>Nombre: {character?.name}</h2>
          <h3>Status: {character?.status}</h3>
          <h3>Especie: {character?.species}</h3>
          <h3>Genero: {character?.gender}</h3>
          <h3>Origin: {character?.origin?.name}</h3>
          </div>
          {/* <h1>{character.location}</h1> */}
          <img src={character.image} alt={character.name} className={style.image} ></img>
        </div>
        </>
    )
}

export default Detail