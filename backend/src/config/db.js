const mongoose = require("mongoose");

// Conexão
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {

        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bfbg4ij.mongodb.net/`
        );

        console.log("Conexão feita com sucesso!")
        return dbConn

    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn();

