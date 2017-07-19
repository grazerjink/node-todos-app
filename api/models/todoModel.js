var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    text: String,
    status: Boolean
})

var Todos = mongoose.model("Todos",todoSchema);

module.exports = Todos;