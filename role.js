var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var RoleSchema = new Schema({
  description: String,
  addDeployment: Boolean,
  name: String,
  addUser: Boolean,
  controlDevices: Boolean,
  active: Boolean,
  added: {
    type: Date,
    default: Date.now
  }
});
RoleSchema
    .virtual("url")
    .get(function () {
      return "/api/role/" + this._id;
    });
module.exports = mongoose.model("Role", RoleSchema);
