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
            myFavorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters, action.payload]
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
        // const { allCharacters } = state
        const filter = state.allCharacters.filter(char => char.gender === action.payload)
        return{
            ...state,
            myFavorites: filter
        }

    case ORDER:
        return{
            ...state,
            myFavorites:
            action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id)
        }

    default:
        return {
            ...state
        }
   }
}

export default reducer