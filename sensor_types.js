var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SensorTypesSchema = new Schema({
  description: String,
  name: String,
  active: Boolean,
  added: Date,
  defaultPushInterval: Number
});
SensorTypesSchema
	.virtual("url")
	.get(function () {
  return "/api/sensor_types/" + this._id;
});

module.exports = mongoose.model("SensorTypes", SensorTypesSchema);
