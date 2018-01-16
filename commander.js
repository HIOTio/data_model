var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommanderSchema = new Schema({
  description: String,
  name: String,
  deployment:{
    type: Schema.Types.ObjectId,
    ref: "deployment"
  },
  paths:[{
      type: Schema.Types.ObjectId,
      ref: "path"
  }],
  active: Boolean
  added: Date
});
CommanderSchema
	.virtual("url")
	.get(function () {
  return "/api/commander/" + this._id;
});

// Compile model from schema
module.exports = mongoose.model("Commander", CommanderSchema);
