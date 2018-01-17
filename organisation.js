var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrganisationSchema = new Schema({
  name: String,
  description: String,
  members: [{
        memberRole:{
      type: Schema.Types.ObjectId,
      ref: "OrgRole"
    },
    member: {
      type: Schema.Types.ObjectId,
      ref: "profile"
    }

  }],
  deployments: [{
    type: Schema.Types.ObjectId,
    ref: "deployment"
  }],
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
