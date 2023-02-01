import React from "react"
import { Link } from "react-router-dom"
import style from "./About.module.css"
const { contain, creador, nombre, lista,boton } = style



const About = () => {
    return(
        <div className={contain}>
            <div className={creador}>
                <button className={boton}>
                    <Link className={style.link} to="/home">Home</Link>
                </button>
               <h2 className={nombre}>Rick y Morty App</h2>
               {/* <img alt="troyan" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUNHid_BtGyix39jH_PvVaWb4D4olrvyk5A&usqp=CAU"/> */}
               
               {/* <h1>App Info</h1>  */}
               <ul className={lista}>App Info
                <li>Mas de 800 cartas de personajes de Rick y Morty</li>
                <li>Lo ultimo en funciones de ordenamiento y filtado</li>
                <li>Aplicacion en desarrollo...</li>
                <li>Una creación de Joaquin Ocampo</li>
                </ul>  
            </div>
       
        </div>
    )
}

export default About