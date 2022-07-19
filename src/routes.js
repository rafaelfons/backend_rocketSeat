const { Router, request } = require('express')
const DevController = require ('./Controllers/DevController')
const SearchController = require ('./controllers/SearchController')
const routes = Router();

routes.get('/devs', DevController.index )
routes.post('/creat', DevController.store  )
routes.get('/search', SearchController.index)

module.exports = routes;