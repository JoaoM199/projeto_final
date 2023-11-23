const mongoose = require("mongoose")
const {Schema} = mangoose // Esquema

const userSchema = new Schema({
    name: String,
    date: Number,
    email: String,
    password: String
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User;