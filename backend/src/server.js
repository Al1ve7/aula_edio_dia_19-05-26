import express from 'express';

const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send('Servidor backend rodando com sucesso!');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando e aguardando requisições na porta ${PORT}`);
});