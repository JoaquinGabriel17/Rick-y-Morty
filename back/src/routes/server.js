// const http = require('http');
// const getCharById = require('../controllers/getCharById');
// const getCharDetail = require('../controllers/getCharDetail');

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     let id = req.url.split('/').at(-1);

//     if(req.url.includes('onsearch')){
//         getCharById(res, id)
//     }

//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }

// }).listen(3001, 'localhost');


const express = require('express')
const app = express();
const axios = require("axios")
const cors = require("cors")
const allData = require('../controllers/getAllChars')
let fav = []

app.use(cors())

app.use(express.json())

app.get(`/rickandmorty/all`, async(req, res) => {
    try{
        const response = await allData()
        res.status(200).json(response)
    }
    catch(err){
        res.status(400).send('fallo loco')
    }

})

app.get(`/rickandmorty/character/:id`, async (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    
    try{
        const { id }= req.params
    let { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`)
  
    const infoChar = {
        id: data.id,
        name: data.name,
        species: data.species,
        gender: data.gender,
        image: data.image
       }
        res.status(200).json(infoChar)
    }
    catch(err){
        res.status(404).send("el puto error esta aca")
    }
    })

app.get(`/rickandmorty/detail/:detailId`, async (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    
        try{
            const { detailId }= req.params
        let resp = (await axios(`https://rickandmortyapi.com/api/character/${detailId}`)).data
      
        const infoCharDetail = {
            id: resp.id,
            name: resp.name,
            status: resp.status,
            species: resp.species,
            gender: resp.gender,
            origin: resp.origin,
            image: resp.image
           }
            res.status(200).json(infoCharDetail)
        }
        catch(err){
             res.status(404).send(err.message)
        }
        })


app.get("/rickandmorty/fav", (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(fav)
})
    

app.post('/rickandmorty/fav', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');

    fav.push(req.body)

    res.status(200).send("se guardaron los datos")
})


app.delete('/rickandmorty/fav/:id', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    const { id } = req.params

    const filet = fav.filter(favo => favo.id !== parseInt(id))
    fav = filet

    res.status(200).send("Se eliminó con éxito")


})
    


module.exports = app