var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
  description: String,
  added: Date,
  active: Boolean,
  isAdmin: Boolean,
  isConfigAdmin: Boolean,
  isBilling: Boolean,
  isReader: Boolean,
  isCgAdmin: Boolean
});
GroupSchema
	.virtual("url")
	.get(function () {
  return "/api/group/" + this._id;
});

// Compile model from schema
module.exports = mongoose.model("Group", GroupSchema);
