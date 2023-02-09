const app = require("./server")
const sequelize = require('../DB_connection')
const saveApiData = require('../controllers/saveApiData')

sequelize.sync({ force: true }).then(() => 
    console.log('database conected'),
    saveApiData(),
     app.listen(3001, () => {
        console.log('server on port 3001')
}))