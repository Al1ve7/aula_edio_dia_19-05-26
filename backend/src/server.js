import express from 'express';
import dotenv from 'dotenv';
import filmesRouter from './routes/filme.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/filmes', filmesRouter);

app.get('/', (req, res) => {
  res.status(200).send('API da Locadora funcionando perfeitamente!');
});

app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 Servidor rodando desacoplado com sucesso!`);
  console.log(`🔗 Link para testar as rotas:`);
  console.log(`👉 http://localhost:${PORT}/filmes`);
  console.log(`==================================================\n`);
});