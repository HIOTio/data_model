var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
  name: String,
  added: Date,
  description: String,
  fields: [{
    fieldName: String,
    description: String,
    required: Boolean,
    fieldType: String
  }]
});
TopicSchema
	.virtual("url")
	.get(function () {
  return "/api/topic/" + this._id;
});

// Compile model from schema
module.exports = mongoose.model("Topic", TopicSchema);
