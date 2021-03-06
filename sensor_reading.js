var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SensorReadingSchema = new Schema({
  sensorId: {
    type: Schema.Types.ObjectId,
    ref: "Sensor"
  },
  date: {
    type: Date,
    default: Date.now
  },
  reading: Number

});
SensorReadingSchema
	.virtual("url")
	.get(function () {
  return "/api/sensor_reading/" + this._id;
});
module.exports = mongoose.model("SensorReading", SensorReadingSchema);
