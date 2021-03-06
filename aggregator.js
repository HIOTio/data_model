var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AggregatorSchema = new Schema({
  name: String,
  aggId: String,
  channel: String,
  topics: [String],
  description:String,
  handler: {
    type: Schema.Types.ObjectId,
    ref: "Handler"
  },
  poll:Number,
  deployment: {
    type:Schema.Types.ObjectId,
    ref:"Deployment"
  },
  added: Date,
  active: Boolean,
  device: {
    type: Schema.Types.ObjectId,
    ref: "Device"
  }
},{timestamps: true});
AggregatorSchema
	.virtual("url")
	.get(function () {
  return "/api/aggregator/" + this._id;
});

// Compile model from schema
module.exports = mongoose.model("Aggregator", AggregatorSchema);
