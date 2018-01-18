var mongoose = require("mongoose");
var debug = require("debug")("models/controller_types.js");
var Schema = mongoose.Schema;

var controllerTypeSchema = new Schema({
    description: String,
    name: String,
    parent:{
        type: Schema.Types.ObjectId,
        ref:"controllertype"
    };

});

module.exports = mongoose.model("ControllerType",controllerTypeSchema);
