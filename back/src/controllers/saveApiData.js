const axios = require('axios')
const { character } = require('../models/Character');

const getApiData = async(res, req) => {
    try{
        let i = 0
        const { data } = await axios("https://rickandmortyapi.com/api/character")
        const characters = []
        const recursion = (i) => {
            characters.push(data[i])
            if (i === 99) return 
            return recursion(i + 1)
        }
        // res.status(200).json(characters)
        return characters
    }
    catch(err){
        res.status(400).json({ error: err.message })
        
    }

}

const saveApiData = () => {
    const infoApi = getApiData()
    infoApi.forEach(async(element) => {
        const [ char, created ] = await character.findOrCreate({
            where: {
                id: element.id,
                name: element.name,
                species: element.species,
                origin: element.origin,
                gender: element.gender,
                image: element.image,
            },
            default: {
                id: element.id,
                name: element.name,
                species: element.species,
                origin: element.origin,
                gender: element.gender,
                image: element.image,
            }
        })
        
    });
}

module.exports = {
    saveApiData,
}