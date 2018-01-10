var mongoose = require('mongoose')
var Schema = mongoose.Schema

var sensorTypesSchema = new Schema({
  description: String,
  name: String,
  active: Boolean,
  added: Date,
  defaultPushInterval: Number
})
sensorTypesSchema
	.virtual('url')
	.get(function () {
  return '/api/sensorTypes/' + this._id
})

module.exports = mongoose.model('sensorTypes', sensorTypesSchema)
