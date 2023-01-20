import React from "react"
import { Link } from "react-router-dom"
import style from "./About.module.css"
const { contain, creador, nombre, lista,boton } = style



const About = () => {
    return(
        <div className={contain}>
            <div className={creador}>
                <button className={boton}>
                    <Link to="/home">Home</Link>
                </button>
               <h2 className={nombre}>Joaquin Ocampo</h2>
               {/* <img alt="troyan" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUNHid_BtGyix39jH_PvVaWb4D4olrvyk5A&usqp=CAU"/> */}
               
               {/* <h1>App Info</h1>  */}
               <ul className={lista}>App Info
                <li>Aplicacion de Rick y Morty</li>
                <li>Cartas de todos los personajes de la serie</li>
                <li>Funciones(en etapa de desarrolo)</li>
                </ul>  
            </div>
       
        </div>
    )
}

export default About