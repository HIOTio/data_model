var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BrokerSchema = new Schema({
  description: String,
  name: String,
  myPaths: [
      {
          type: Schema.Types.ObjectId,
          ref: "Path"
      }
     ],
  handler: {
    type: Schema.Types.ObjectId,
    ref:"handler"
  },
  deployment: {
    type: Schema.Types.ObjectId,
    ref:"deployment"
  },
  added: Date,
  active: Boolean
});

BrokerSchema
	.virtual("url")
	.get(function () {
  return "/api/broker/" + this._id;
});

module.exports = mongoose.model("Broker", BrokerSchema);
