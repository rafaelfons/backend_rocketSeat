const { Router, request } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const routes = Router();

routes.post('/devs', async (req, res) => {  // rotas busca de dados

    const { github_username, techs, latitude, longitude } = req.body // usuário do github recebido do corpo da requisição
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`) // declaração busca de dados github
    const { name = login, avatar_url, bio } = apiResponse.data // declaração dados devolvido pelo api.github
    const techsArray = techs.split(',').map(tech => tech.trim()) // declaração dados de tecnologias do usuario
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    })

    return res.json({ message: dev }) // retorno fim de busca tela insomnia 
});

routes.post('/teste/:id', async (req, res) => {

    try {


        const { data } = req.body;

        const { id } = req.params;

        console.log(id)
        console.log(data)

        for (let i = 0; i < id; i++) {
            if(data.techs){
                return res.status(200).json({message: "Perfect!"})
            }
        }

        return res.status(200).json({ message: "Ok!" })
    } catch (error) {
        return res.send(error)
    }
})

module.exports = routes;