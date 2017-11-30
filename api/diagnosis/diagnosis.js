const restful = require('node-restful')
const mongoose = restful.mongoose

const symptonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

const pacientSchema = new mongoose.Schema({
    sex: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['MALE', 'FEMALE']
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    state: {
        type: String,
        required: true
    }
})

const diagnosisSchema = new mongoose.Schema({
    diagnosis: {
        type: String,
        required: true
    },
    symptons: [symptonSchema],
    pacient: pacientSchema
})

module.exports = restful.model('Diagnosis', diagnosisSchema)