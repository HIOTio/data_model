var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrganisationSchema = new Schema({
  name: String,
  description: String,
  active: Boolean,
  added: Date
});
OrganisationSchema
	.virtual("url")
	.get(function () {
  return "/api/organisation/" + this._id;
});

// Compile model from schema
module.exports = mongoose.model("Organisation", OrganisationSchema);
