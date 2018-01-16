var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DeviceConfigurationSchema = new Schema({
  description: String,
  added: Date,
  ipAddress: String
});
DeviceConfigurationSchema
	.virtual("url")
	.get(function () {
  return "/api/device_configuration/" + this._id;
});

// Compile model from schema
module.exports = mongoose.model("DeviceConfiguration", DeviceConfigurationSchema);
