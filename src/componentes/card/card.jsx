import { Link } from "react-router-dom";
import style from "./card.module.css"
import { addFav, deleteFav } from "../../redux/actions";
import { useDispatch, useSelector  } from "react-redux";
import { useState, useEffect } from "react";


const {carta, texto, nombre, boton, fav} = style
 function Card(props) {
   const {name, species, gender, image, onClose, id } = props
   const [ isFav, setIsFav ] = useState(false)
   const dispatch = useDispatch();
   const { myFavorites } = useSelector(state => state);
   

   
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(!isFav)
         dispatch(deleteFav(id))
      }
      else{
         setIsFav(!isFav)
         dispatch(addFav(props))
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === Number(id)) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
       < div className={carta} key={id}>
         
           <button className={boton} onClick={onClose}>X</button>
          
          <h2 className={texto} key="gender">{gender}</h2>
          
         <h2 className={texto} key="species">{species}</h2>
         <Link to={`/detail/${id}`}>
          <h2 className={nombre} key="name">{name}</h2>
          </Link>
          <img src={image} alt={name} />
          {
   isFav ? (
      <button className={fav} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={fav} onClick={handleFavorite}>🤍</button>
   )
}
       </div>
    );
 }
 
export default Card