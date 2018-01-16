var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PathSchema = new Schema({
  in: String,
  out: String,
  deployment:{
    type: Schema.Types.ObjectId,
    ref: "Deployment"
  },
  device: {
      type: Schema.Types.ObjectId,
      ref: "Device"
  },
  active: Boolean,
  added: Date
});
PathSchema
	.virtual("url")
	.get(function () {
  return "/api/path/" + this._id;
});

// Compile model from schema
module.exports = mongoose.model("Path", PathSchema);
