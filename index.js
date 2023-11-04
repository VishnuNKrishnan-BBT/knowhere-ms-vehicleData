//MODULE IMPORTS
const express = require('express')
require('dotenv').config();

//CORE FUNTIONS IMPORT
const addNewVehicle = require('./coreFunctions/addNewVehicle')

//INITIALIZE EXPRESS
const app = express()
const port = process.env.PORT || 4000

//MIDDLEWARE - REQUEST FORMATTING
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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

app.post('/linkedVehicles', (req, res) => {
    var returnData = []

    var vehicleData = {
        accountId: 1212621,
        vehicleId: 'WQC-212-OPS-305'
    }

    returnData.push(vehicleData)

    res.send(returnData)
})





app.post('/newVehicle', (req, res) => {
    addNewVehicle({ ...req.body, res })
})

//START SERVER
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})