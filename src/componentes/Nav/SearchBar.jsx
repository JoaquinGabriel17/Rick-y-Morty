import { useState } from "react";
import style from "./Nav.module.css"
const {boton} = style

export default function SearchBar({onSearch}) {

   const[character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

    return (
       <div>
          <input type='search' value={character} onChange={handleChange} />
       <button className={boton} onClick={() => onSearch(character)}>Agregar</button>
       </div>
    );
 }
 