var mongoose = require('mongoose')
var Schema = mongoose.Schema

let EducationModel = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  major: {
    type: String
  },
  school: {
    type: String
  },
  start_date: {
    type: Date,
    default: ""
  },
  end_date: {
    type: Date,
    default: ''
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Education', EducationModel)