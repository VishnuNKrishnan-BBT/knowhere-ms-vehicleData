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

    res.json({ "status": 200 })
}

module.exports = addNewVehicle