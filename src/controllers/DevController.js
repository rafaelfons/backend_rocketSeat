const axios = require('axios')
const Dev = require('../Models/Dev')
const { index } = require('../models/utils/PointSchema')
const parseStringAsArray = require ('../utils/parseStringAsArray')
const { findOneAndUpdate , deleteOne } = require("../Models/Dev")

module.exports = {
   async index (req, res) {
    const devs = await Dev.find()
    
    return res.json(devs)
   },    
    
    
    async store (req, res)  {  

        const { github_username, techs, latitude, longitude } = req.body
        let dev = await Dev.findOne({github_username})
        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`) 
            const { name = login, avatar_url, bio } = apiResponse.data 
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
       
        else return res.json({ message: "Dev exist", dev }) 
    },
    async findOneAndUpdate (req, res)  {  

        const { github_username, techs, latitude, longitude } = req.body
        let devsup = await Dev.find({github_username})
         if (devsup !== null){
             const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`) 
             console.log(apiResponse.data)
             const { name = github_username, avatar_url, bio } = apiResponse.data 
             const techsArray =  parseStringAsArray(techs)
             const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
             },
        
                devsup = await Dev.findOneAndUpdate( {github_username},
                {
                    name,
                    avatar_url,
                    bio,
                    techs: techsArray,
                    location,
                })
              
            return res.json({ message: "Dev update", devsup }) 
        }

        else return res.json({ message: "Dev not exist"})
        
    },
   async deleteOne(req, res){
    const {github_username} = req.params;


    console.log(github_username, "teste github_username")

    const devsDel = await Dev.deleteOne({github_username})

    console.log(devsDel)

    if(devsDel.deletedCount === 0){
        return res.status(400).json({message: "Não encontrado"}) 
    } else {
        return res.status(200).json({message: "Deletado com sucesso"}) 
    }
    
}
   
}

console.log("teste DevController")
