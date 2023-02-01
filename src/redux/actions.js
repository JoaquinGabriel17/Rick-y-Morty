import { ADD_FAV, DELETE_FAV,FILTER, ORDER } from "./actions-type";
import axios from "axios"

export const addFav = (fav) => {
    return async (dispatch) => {
        
        const response = await axios.post("http://localhost:3001/rickandmorty/fav", fav)
        const data = response.data

        return dispatch({
            type: ADD_FAV, payload: data
        })

    }
    
}

export const deleteFav = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        const data  = response.data

        return dispatch({ type: DELETE_FAV, payload: data})
    }
}

export const filterCards = (status) => {
    return { type: FILTER, payload: status }
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id }
}