var mongoose = require('mongoose')
var Schema = mongoose.Schema

let ExpModel = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  company: {
    type: String
  },
  detail: {
    type: String
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Experience', ExpModel)