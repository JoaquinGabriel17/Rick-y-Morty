import { Link } from "react-router-dom";
import style from "./card.module.css"
import { addFav, deleteFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


const {carta, texto, nombre, boton} = style
export  function Card(props) {
   const {name, species, gender, image, onClose, id, addFav, deleteFav, myFavorites} = props
   const [ isFav, setIsFav ] = useState(false)

   

   
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(!isFav)
         deleteFav(id)
      }
      else{
         setIsFav(!isFav)
         addFav(props)
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
       < div className={carta} >
         
           <button className={boton} onClick={onClose}>X</button>
          
          <h2 className={texto} key="gender">{gender}</h2>
          
         <h2 className={texto} key="species">{species}</h2>
         <Link to={`/detail/${id}`}>
          <h2 className={nombre} key="name">{name}</h2>
          </Link>
          <img src={image} alt={name} />
          {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
       </div>
    );
 }
 
export function mapDispatchToProps(dispatch){
   return {
      addFav: (fav) => { dispatch(addFav(fav)) },
      deleteFav: (id) => { dispatch(deleteFav(id)) }
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

 export default connect( mapStateToProps, mapDispatchToProps)(Card);