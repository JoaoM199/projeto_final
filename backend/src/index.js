import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.router.js'

const app = express();

app.use(cors({
    Credentials: true,
    origin: "http://localhost:3000"
}));

app.use('/api/products', productsRouter)

const port = 3000;
app.listen(port, () => {
    console.log(`Iniciando aplicação na porta ${port}`);
});