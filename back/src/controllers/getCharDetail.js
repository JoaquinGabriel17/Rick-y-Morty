const {Favorite} = require('../DB_connection')

const deleteFavById = async(id) => {
    try {
        const finder = await Favorite.findByPk(id);

        if(!finder) throw new Error('Favorito no encontrado')

        finder.destroy();

        return 'Blanco abatido'
    } catch (error) {
        return { error: error.message }
    }
}


module.exports = deleteFavById;