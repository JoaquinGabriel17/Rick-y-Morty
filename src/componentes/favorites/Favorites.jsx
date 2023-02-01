import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import style from "./favorites.module.css"
import { orderCards, filterCards } from "../../redux/actions"


 const Favorites = () => {

const dispatch = useDispatch()
const { myFavorites } = useSelector(state => state);
    const handleSelector = (e) => {
        e.preventDefault()
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={style.div}>
        <button className={style.boton}>
            <Link to="/home">Home</Link>
        </button>
          <div >
                    <select disabled={false} className={style.selector}
                     onChange={handleSelector}>
                        <option  selected={true} disabled="disabled">Ordenar</option>
                        <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                    <select className={style.selector}  onChange={handleFilter}>
                        <option selected={true} disabled="disabled">Filtrar</option>
                        <option  value="Male">Male</option>
                        <option  value="Female">Female</option>
                        <option  value="Genderless">Genderless</option>
                        <option  value="unknown">unknown</option>
                    </select>
                    </div>
          <div className={style.contain}>
          
          {
             myFavorites.map(fav => {
                return (

                    <div className={style.fav} key={fav.id}>
                        <Link to={`/detail/${fav.id}`} >
                            <h1>{fav?.name}</h1>
                        </Link>
                        <img src={fav.image} alt={fav.name}></img>
                    
                    </div>
                )
            })
          }
          </div>
        </div>
    )
}

export default Favorites