// Importação das bibliotecas
const express = require('express')
const cors = require('cors')
const productsRouter = require('./routes/products.router.js')
const mongoose = require('mongoose')
const UserModel = require('./models/Users.js')

// Aplicativo
const app = express();

const port = 3001

mongoose.connect("mongodb+srv://JM:y40Vpsy8Z0MP0PtU@cluster0.bfbg4ij.mongodb.net/")

mongoose.connection.once('open', () => {
    console.log("Conexão com MongoDB estabelecida com sucesso")
})

/*
        .then(() => {
            console.log('Conexão com mongoDB estabelecida com sucesso');
        })
        .catch((error) => {
            console.error("Erro ao conectar ao MongoDB", error)
        })
)
*/

app.use(cors({
    Credentials: true,
    origin: `http://localhost:${port}`
}));

app.get("/getUsers", async (req, res) => {
    try{
    const result = await UserModel.find({})
    res.json(result)
    } catch(error) {
        console.error("Erro ao consultar usuários", error)
        res.status(500).json({error: "Erro interno ao consultar usuários"})
    }
})

//app.use('/api/products', productsRouter)

app.listen(port, () => {
    console.log(`Iniciando aplicação na porta ${port}`);
});