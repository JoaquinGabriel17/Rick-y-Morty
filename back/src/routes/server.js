
const express = require('express')
const app = express();
const axios = require("axios")
const cors = require("cors")
const allData = require('../controllers/getAllChars')
// const { saveApiData } = require('../controllers/saveApiData')
// const { sequelize } = require('../DB_connection')
// let fav = []
const postFav = require('../controllers/postFav')
const getAllFavorites = require('../controllers/getAllFavorites')
const deleteFavById = require('../controllers/getCharDetail')
app.use(cors())
app.use(express.json())
//ahora bno


app.get('/rickandmorty/allCharacters', async(req, res) => {
    try {
        const allChar = await allData();
        res.status(200).json(allChar)
    } catch (error) {
        res.status(400).send('No anda loco')
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


app.get("/rickandmorty/fav", async(req, res) => {
    try {
        const allFav = await getAllFavorites();

        if(allFav.error) throw new Error(allFav.error)

        return res.status(200).json(allFav)

    } catch (error) {
        return res.status(400).send(error)
    }
})
    

app.post('/rickandmorty/fav', async(req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const characterFav = await postFav(req.body)
        if(characterFav.error) throw new Error(characterFav.error)
        res.status(200).json(characterFav)
        
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
    

    
})


app.delete('/rickandmorty/fav/:id', async(req, res) => {
    
    try {
        const { id } = req.params
        const resp = await deleteFavById(parseInt(id))
        if(resp.error) throw new Error(resp.error)

        return res.status(200).send(resp)
    } catch (error) {
        return res.status(400).send(error)
    }

    


})
    


module.exports = app