require('dotenv').config();
const  { Sequelize }  = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;
const modelChar = require('./models/Character')
const favoriteModel = require('./models/Favorite')
/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(DB_DEPLOY, {
   logging: false,
   native: false,
   dialectOptions: {
      ssl: {
         require: true
      }
   }
   }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/
modelChar(sequelize)
favoriteModel(sequelize);

module.exports = {
   ...sequelize.models,
   sequelize,
};
