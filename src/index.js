const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://rafaelfon:R181006r@cluster0.yulx12c.mongodb.net/?retryWrites=true&w=majority');

app.use(express.json()); // uso do insomnia
app.use(routes)


app.listen(3232);
//Metodos http: get, post, put, delete

//Tipos de parametros:
//Query Params:req.query (filtros, ordenação, paginação, etc)
//Route Params:req.params (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)



