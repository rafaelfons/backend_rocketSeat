const axios = require('axios')
const Dev = require('../Models/Dev')
const { index } = require('../models/utils/PointSchema')
const parseStringAsArray = require ('../utils/parseStringAsArray')

module.exports = {
   async index (req, res) {
    const devs = await Dev.find()
    
    return res.json(devs)
   },    
    
    
    async store (req, res)  {  // rotas busca de dados

        const { github_username, techs, latitude, longitude } = req.body // usuário do github recebido do corpo da requisição
        let dev = await Dev.findOne({github_username})
        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`) // declaração busca de dados github
            const { name = login, avatar_url, bio } = apiResponse.data // declaração dados devolvido pelo api.github
            const techsArray =  parseStringAsArray(techs)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
            return res.json({ message: "Dev Create", dev }) 
        }
       
    
        else return res.json({ message: "Dev exist", dev }) // retorno fim de busca tela insomnia 
    }
}