var mongoose = require('mongoose')
var Schema = mongoose.Schema

let userModel = new Schema({
  fullName: {
    type: String
  },
  avatar: {
    type: String
  },
  adress: {
    type: String
  },
  major: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  detail: {
    type: String
  },
  interests: {
    type: Array
  },
  languages: {
    type: Array
  },
  skills: {
    type: Array
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('User', userModel)