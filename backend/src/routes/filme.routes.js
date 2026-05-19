import { Router } from 'express';
import filmesService from '../services/filme.service.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const filmes = await filmesService.listarTodos();
    return res.status(200).json(filmes);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar filmes no servidor.' });
  }
});

router.post('/', async (req, res) => {
  const { nome, categoria } = req.body;

  if (!nome || !categoria) {
    return res.status(400).json({ error: 'Nome e categoria são obrigatórios.' });
  }

  try {
    const novoFilme = await filmesService.criar(nome, categoria);
    return res.status(201).json(novoFilme);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar filme no servidor.' });
  }
});

export default router;