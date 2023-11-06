const { connectToDB } = require('../connectToDB')
const Tracker = require('../models/tracker')

connectToDB()

const addNewTracker = ({
    trackerId,
    trackerPassword,
    simId = null,
    ipV4 = null,
    port = null,
    res
}) => {

    var actionBlocked = false //Flag. Updates to true if action should not be performed based on validation.

    Tracker.findOne({ trackerId: trackerId })
        .then(result => {
            if (result !== null) { //If already exists
                actionBlocked = true
                res.json({ "status": 500, "message": `This tracker (${trackerId}) already exists!` })
                return
            } else {
                {
                    const newTracker = new Tracker({
                        trackerId: trackerId,
                        isAssigned: false,
                        trackerPassword: trackerPassword,
                        simId: simId,
                        ipV4: ipV4,
                        port
                    })

                    newTracker.save()
                    res.json({ "status": 200, "message": `${trackerId} added successfully!` })
                    return
                }
            }
        })
}

module.exports = addNewTracker