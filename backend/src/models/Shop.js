const mangoose = require("mangoose")
const { default: mongoose } = require("mongoose")
const {Schema} = mangoose

const shopSchema = new Schema({
    userID: mongoose.objectID,
    userName: String,
    products: Array
}, {
    timestamps: true
})

const Shop = mongoose.model("Shop", shopSchema)

module.exports = Shop
