const Assignee = require('../models/assignee')

const postNewAssignee = ({
    firstName,
    lastName,
    primaryContactCC,
    primaryContactNumber,
    primaryContactEmail,
    secondaryContactCC = null,
    secondaryContactNumber = null,
    secondaryContactEmail = null,
    photoB64 = null,
    res
}) => {

    console.log('Posting new assignee...');

    const assigneeId = `ASN_${Date.now()}`

    const newAssignee = new Assignee({
        assigneeId: assigneeId,
        firstName: firstName,
        lastName: lastName,
        primaryContactCC: primaryContactCC,
        primaryContactNumber: primaryContactNumber,
        primaryContactNumberVerified: false,
        primaryContactEmail: primaryContactEmail,
        primaryContactEmailVerified: false,
        secondaryContactCC: secondaryContactCC,
        secondaryContactNumber: secondaryContactNumber,
        secondaryContactEmail: secondaryContactEmail,
        photoB64: photoB64
    })

    newAssignee.save()
    res.json({
        status: 200,
        message: `${firstName} ${lastName} (${assigneeId}) added successfully!`
    })
}

module.exports = postNewAssignee