app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

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
