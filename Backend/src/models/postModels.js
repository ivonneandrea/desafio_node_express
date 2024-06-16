import pool from '../../database/connectionL.js';

const getPost = async () => {
    const { rows } = await pool.query('SELECT * FROM posts');
    return rows;
}

const createPost = async ({ titulo, img, descripcion }) => {
    const query = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await pool.query(query, [titulo, img, descripcion]);
    return rows[0];
};
    

export { getPost, createPost };