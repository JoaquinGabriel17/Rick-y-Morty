// const sequelize = require('../DB_connection')
const { Characters } = require('../DB_connection')

const allData = async() => {
    try{
    const allChar = await Characters.findAll()
    return allChar
    }
    catch(error){
        return { error: error.message}

    }
}

module.exports = allData