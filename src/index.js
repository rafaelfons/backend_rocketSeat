const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://rafaelfon:R181006r@rocketseat.u198iot.mongodb.net/?retryWrites=true&w=majority');

app.use(cors({origin:'http://localhost:3000'})) 
app.use(express.json());
app.use(routes)


app.listen(3232);

console.log("teste index")



