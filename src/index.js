const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket (server)

mongoose.connect('mongodb+srv://rafaelfon:R181006r@rocketseat.u198iot.mongodb.net/?retryWrites=true&w=majority');

app.use(cors({origin:'http://localhost:3000'})) 
app.use(express.json());
app.use(routes)


server.listen(3232);

console.log("teste index")



