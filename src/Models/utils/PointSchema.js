const mongoose = require ('mongoose')

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: false,
    },
    coordinates:{
        type:[Number],
        required: false,
    },
})

module.exports = PointSchema