const axios = require('axios')
const { Character } = require('../DB_connection');

const getApiData = async() => {
    try{
        let i = 1
        
        let characters = []
        while(i < 6){
            const  data  = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)
            characters.push(data)
            i++
        }
        characters = (await Promise.all(characters)).map(res => res.data.result.map(char => {
            return({
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image
            })
        }))
        let allcharacters = []
        characters.map(char => { allcharacters = allcharacters.concat(char) })
        return allcharacters

    }
    catch(err){
        return {error: err.message}
        
    }

}

const saveApiData = async() => {
    try{
        const infoApi = await getApiData()
        await Character.bulkCreate(infoApi);
        //bulkCreate permite que le pase un array y lo crea en la DB
    }
    catch(error){
        return { error: error.message}
    }   
}

module.exports = saveApiData
