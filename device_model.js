var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DeviceModelSchema = new Schema({
  description: String,
  make: {
    type: Schema.Types.ObjectId,
    ref: "DeviceMake"
  },
  added: Date
});
DeviceModelSchema
	.virtual("url")
	.get(function () {
  return "/api/device_model/" + this._id;
});
module.exports = mongoose.model("DeviceModel", DeviceModelSchema);
