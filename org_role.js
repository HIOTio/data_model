var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrgRoleSchema = new Schema({
  name: String,
  description: String,
  active: Boolean,
  added: Date
});
OrgRoleSchema
	.virtual("url")
	.get(function () {
  return "/api/org_role/" + this._id;
});

// Compile model from schema
module.exports = mongoose.model("OrgRole", OrgRoleSchema);
