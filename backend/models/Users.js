const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})

const User = mongoose.model("base_dados.users", userSchema)

module.exports = User;