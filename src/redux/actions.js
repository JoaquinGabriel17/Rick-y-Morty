import { ADD_FAV, DELETE_FAV,FILTER, ORDER } from "./actions-type";


export const addFav = (fav) => {
    return {type: ADD_FAV, payload: fav }
}

export const deleteFav = (id) => {
    return { type: DELETE_FAV, payload: id }
}

export const filterCards = (status) => {
    return { type: FILTER, payload: status }
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id }
}