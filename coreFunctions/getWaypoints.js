const createWaypointModel = require('../models/waypoint')

const getWaypoints = async ({ req, res }) => {

    var returnData = []

    const Waypoint = createWaypointModel('api_test_mob')

    const coords = await Waypoint.find({})

    coords.map((obj, key) => {
        returnData.push([obj.latitude, obj.longitude])
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