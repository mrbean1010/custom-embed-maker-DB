const mongoose = require("mongoose");

const embedSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    item: String,
    itemInfo: String,
    itemImage: String,
    itemName: String,
    itemRetail: String,
    itemResell: String,
    time: String
})

module.exports = mongoose.model("embedDB", embedSchema);