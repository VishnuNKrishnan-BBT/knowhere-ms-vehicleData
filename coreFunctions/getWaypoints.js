const createWaypointModel = require('../models/waypoint')

const getWaypoints = async ({ req, res }) => {

    var returnData = []

    const Waypoint = createWaypointModel('api_test_mobs')

    const coords = await Waypoint.find({}) //Finds all

    coords.map((obj, key) => {
        if (!obj.accuracy || obj.accuracy < 50) { // lower to 20
            returnData.push([obj.longitude, obj.latitude])
        }
    })

    // console.log(returnData)
    res.json({
        status: 200,
        message: 'success',
        count: returnData.length,
        data: returnData
    })
}

module.exports = getWaypoints