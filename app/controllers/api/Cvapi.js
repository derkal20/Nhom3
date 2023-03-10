var User = require('../../models/user')
var Education = require("../../models/education")
var Experience = require("../../models/experience")

class Cvapi {
  async index(req, res) {
    let userID = "640a8d3c9acbea07376986c9"
    let user = await User.find({ _id: userID })
    let educations = await Education.find({ user_id: userID })
    let experiences = await Experience.find({ user_id: userID })
    let data = { user, educations, experiences }

    res.send(data)
  }
}

module.exports = new Cvapi()