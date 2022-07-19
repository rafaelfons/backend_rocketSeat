const Dev = require('../Models/Dev')
const parseStringAsArray = require ('../utils/parseStringAsArray')


module.exports = {
    async index (req, res){
        const {latitude, longitude, techs} = req.query
        const techsArray = parseStringAsArray(techs)

        console.log(techsArray, latitude, longitude)

        return res.json({devs:[]})
    }
}