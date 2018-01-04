var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommsSchema = new Schema({
  comment:String,
  name: String,
  email: String,
  responded: Boolean,
  added: Date
});

// Compile model from schema
module.exports = mongoose.model("Comms", CommsSchema);
