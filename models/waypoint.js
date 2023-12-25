const mongoose = require('mongoose')
const Schema = mongoose.Schema

const waypointSchema = new Schema({
    trackerId: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const createWaypointModel = trackerId => { //This is required as the table name is dynamic.
    return mongoose.model(`WP_${trackerId}`, waypointSchema)
}

module.exports = createWaypointModel