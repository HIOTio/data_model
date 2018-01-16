var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CoordinatorGroupSchema = new Schema({
  description: String,
  name: String,
  active: Boolean,
  added: Date,
  calculation: String,
  sensortype: {
    type: Schema.Types.ObjectId,
    ref: "SensorTypes"
  },
  sensors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sensor"
    }
  ]
});
CoordinatorGroupSchema
	.virtual("url")
	.get(function () {
  return "/api/coordinator_group/" + this._id;
});

module.exports = mongoose.model("CoordinatorGroup", CoordinatorGroupSchema);
