import pool from '../config/db.js';

class FilmesService {
  
  async listarTodos() {
    try {
      const resultado = await pool.query('SELECT * FROM filmes;');
      return resultado.rows;
    } catch (error) {
      console.error('Erro no método listarTodos:', error);
      throw error;
    }
  }

 
  async criar(nome, categoria) {
    try {
      const queryText = 'INSERT INTO filmes (nome, categoria) VALUES ($1, $2) RETURNING *;';
      const resultado = await pool.query(queryText, [nome, categoria]);
      return resultado.rows[0];
    } catch (error) {
      console.error('Erro no método criar:', error);
      throw error;
    }
  }
}


export default new FilmesService();