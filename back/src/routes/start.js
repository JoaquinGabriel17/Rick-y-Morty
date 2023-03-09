const app = require("./server")
const {sequelize} = require('../DB_connection')
const saveApiData = require('../controllers/saveApiData')

sequelize.sync({ force: true }).then(async() => {
    console.log('database conected');
    await saveApiData();
     app.listen(3001, () => {
        console.log('server on port 3001')
     })
}).catch((error) => {
   console.log(error)
})
