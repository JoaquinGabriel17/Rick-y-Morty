const sequelize = require('../DB_connection')

const allData = async() => await sequelize.findAll()

module.exports = allData