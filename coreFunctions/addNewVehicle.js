const { connectToDB } = require('../connectToDB')
const Vehicle = require('../models/vehicle')

connectToDB()

const addNewVehicle = ({
    vehicleId,
    trackerId,
    licensePlate,
    manufacturer,
    model,
    year,
    odometer,
    colour,
    transmission,
    engineNumber,
    chassisNumber,
    res
}) => {

    Vehicle.findOne({ licensePlate: licensePlate })
        .then(result => {
            if (result !== null) { //If license plate already exists
                res.json({ "status": 500, "message": `${licensePlate} already exists!` })
            } else { //If license plate does not exist
                const newVehicle = new Vehicle({
                    vehicleId: vehicleId,
                    trackerId: trackerId,
                    isAssigned: false,
                    driverId: null,
                    licensePlate: licensePlate,
                    manufacturer: manufacturer,
                    model: model,
                    year: year,
                    odometer: odometer,
                    colour: colour,
                    transmission: transmission,
                    lastOnline: 0,
                    isOnline: false,
                    engineNumber: engineNumber,
                    chassisNumber: chassisNumber,
                })

                newVehicle.save()
                res.json({ "status": 200, "message": `${licensePlate}, ${manufacturer} ${model} ${year} added successfully!` })
            }
        })
}

module.exports = addNewVehicle