const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
// const express = require("express")
// const axios = require("axios")
// const app = express()
// const fav = []

// app.use(express.json())

// app.get(`/rickandmorty/character/${id}`, async (req, res) => {
//     let resp = await axios(`https://rickandmortyapi.com/api/character/{detailId}`)
//     console.log(resp.data);   
//     const card = {
//         id: resp.data.id,
//         name: resp.data.name,
//         species: resp.data.species,
//         gender: resp.data.gender,
//         image: resp.data.image
//        }
//        return res.status(200).json(card)
       
//     })

// app.get(`/rickandmorty/detail/${detailId}`, async (req, res) => {
//     let resp = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
//         const detail = {
//             name: resp.data.name,
//             status: resp.data.status,
//             species: resp.data.species,
    //         gender: resp.data.gender,
    //         origin: resp.data.origin,
    //         image: resp.data.image
    //     }
    //     return res.status(200).json(detail)
    // })

    // app.get("/rickandmorty/fav", (req, res) => {
    //     res.status(200).json(fav)
    // })

    // app.post(`/rickandmorty/fav`, (req, res) => {
    //     const { char } = req.body

    //     if(char){
    //         fav.push(char)
    //     }
    // })

    // app.delete(`/rickandmorty/fav/${id}`, (req, res) => {
    //     const { id } = req.url.split("/").at(-1)

    //     if(id){
    //         const filet = fav.filter(favo => favo.id !== id)
    //         fav = filet
    //         return fav
    //     }
    // })
