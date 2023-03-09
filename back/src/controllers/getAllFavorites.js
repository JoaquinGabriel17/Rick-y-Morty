const { Favorite } = require('../DB_connection');

const getAllFavorites = async() => {
    try{
        const allFav = await Favorite.findAll()
        
        if(!allFav) throw new Error('No hay favoritos')

        return allFav
    }
    catch(err){ 
        return { error: err.message }
}
}
module.exports = getAllFavorites;