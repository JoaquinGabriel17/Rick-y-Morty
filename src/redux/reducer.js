import { ADD_FAV, DELETE_FAV, FILTER,ORDER } from "./actions-type";

const initialState = {
   myFavorites: [],
   allCharacters: []
}

const reducer = (state = initialState, action) => {
   switch(action.type){

    case ADD_FAV:
        return {
            ...state,
            myFavorites: [...state.allCharacters,action.payload],
            allCharacters: state.myFavorites
        }

    case DELETE_FAV:
        const filtrado = state.myFavorites.filter((fav) => {
            return fav.id !== action.payload
        })
        return {
            ...state,
            myFavorites: filtrado
        }

    case FILTER:
    
        let filter = state.myFavorites.filter((char) => {
            return char.gender !== action.payload
        })
        return {
            ...state,
            myFavorites: filter
        }

    case ORDER:
        let lista = state.myFavorites
        if(action.payload === "Ascendente"){
            lista.sort()
        }
        if(action.payload === "Descendente") lista.sort()
        return {
            ...state,
            myFavorites: lista
        }

    default:
        return {
            ...state
        }
   }
}

export default reducer