import Card from '../card/card.jsx';
import style from "./cards.module.css"
const {cartas} = style

export default function Cards({ characters, onClose}) {

   return(
       <div className={cartas}>
          {
            characters.map((character) => {
               return (
                  <Card 
                     id={character.id}
                     key={character.id}
                     name={character.name}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     onClose={() => onClose(character.id)}
                  />
               )
            })
          }
       </div>
   )
}
