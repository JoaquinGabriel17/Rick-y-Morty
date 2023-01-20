import { connect, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import style from "./favorites.module.css"
import { orderCards, filterCards } from "../../redux/actions"


export const Favorites = ({myFavorites}) => {

const dispatch = useDispatch()

    const handleSelector = (e) => {
        e.preventDefault()
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <>
        <button className={style.boton}>
            <Link to="/home">Home</Link>
        </button>
          <div>
                    <select>
                        <option onSelect={handleSelector} value="Ascendente" >Ascendente</option>
                        <option onSelect={handleSelector} value="Descendente">Descendente</option>
                    </select>
                    <select>
                        <option onSelect={handleFilter} value="Male">Male</option>
                        <option onSelect={handleFilter} value="Female">Female</option>
                        <option onSelect={handleFilter} value="Genderless">Genderless</option>
                        <option onSelect={handleFilter} value="unknown">unknown</option>
                    </select>
                    </div>
          <div className={style.contain}>
          
          {
            myFavorites && myFavorites.map((fav) => {
                return (

                    <div className={style.fav}>
                    <h1>{fav.name}</h1>
                    <img src={fav.image} alt={fav.name}></img>
                    
                    </div>
                )
            })
          }
          </div>
        </>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites

    }
}

export default connect(mapStateToProps, null)(Favorites);

