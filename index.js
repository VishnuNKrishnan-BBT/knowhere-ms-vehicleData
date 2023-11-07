//MODULE IMPORTS
const express = require('express')
const cors = require('cors')
require('dotenv').config();

//CORE FUNTIONS IMPORT
const addNewVehicle = require('./coreFunctions/addNewVehicle')

//INITIALIZE EXPRESS
const app = express()
const port = process.env.PORT || 4000

//MIDDLEWARE - REQUEST FORMATTING
const bodyParser = require('body-parser');
const addNewTracker = require('./coreFunctions/addNewTracker');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Enable CORS for all routes
app.use(cors())

// MIDDLEWARE - AUTHENTICATION
const authenticate = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token || token !== 'your-secret-token') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next()
}

// Use the authentication middleware for all routes
app.use(authenticate)

//----------------------------------------------------


//ROUTES
app.get('/', (req, res) => {
    res.send('Invalid request')
})

//Add new tracker
app.post('/newTracker', (req, res) => {
    // console.log(req.body);
    addNewTracker({ ...req.body, res })
})

//Add new vehicle
app.post('/newVehicle', (req, res) => {
    addNewVehicle({ ...req.body, res })
})

//Start app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})