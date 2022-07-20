const { Router, request } = require('express')
const DevController = require ('./Controllers/DevController')
const SearchController = require ('./controllers/SearchController')
const routes = Router();
console.log("teste routes")

routes.get('/devs', DevController.index )
routes.post('/creat', DevController.store  )
routes.get('/search', SearchController.index)
routes.patch('/update', DevController.updateOne)
routes.delete('/delete/:github_username', DevController.deleteOne)


module.exports = routes;