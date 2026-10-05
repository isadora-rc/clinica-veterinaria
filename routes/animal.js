const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// GET /animal - listar todos os animais
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM animal';

    connection.query(sql, (erro, resultados) => {
        if (erro) {
            return res.status(500).json({
                erro: 'Erro ao buscar animais'
            });
        }

        res.status(200).json(resultados);
    });
});

// GET /animal/:id - buscar um animal pelo id
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM animal WHERE id = ?';

    connection.query(sql, [req.params.id], (erro, resultados) => {
        if (erro) {
            return res.status(500).json({
                erro: 'Erro ao buscar animal'
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: 'Animal não encontrado'
            });
        }

        res.status(200).json(resultados[0]);
    });
});

// POST /animal - cadastrar um animal
router.post('/', (req, res) => {
    const { nome, especie, responsavel } = req.body;

    const sql = 'INSERT INTO animal (nome, especie, responsavel) VALUES (?, ?, ?)';

    connection.query(
        sql,
        [nome, especie, responsavel],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json({
                    erro: 'Erro ao cadastrar animal'
                });
            }

            res.status(201).json({
                mensagem: 'Animal cadastrado com sucesso',
                id: resultado.insertId,
                nome: nome,
                especie: especie,
                responsavel: responsavel
            });
        }
    );
});

// PUT /animal/:id - atualizar um animal
router.put('/:id', (req, res) => {
    const { nome, especie, responsavel } = req.body;

    const sql = 'UPDATE animal SET nome = ?, especie = ?, responsavel = ? WHERE id = ?';

    connection.query(
        sql,
        [nome, especie, responsavel, req.params.id],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json({
                    erro: 'Erro ao atualizar animal'
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem: 'Animal não encontrado'
                });
            }

            res.status(200).json({
                mensagem: 'Animal atualizado com sucesso'
            });
        }
    );
});

// DELETE /animal/:id - excluir um animal
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM animal WHERE id = ?';

    connection.query(sql, [req.params.id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                erro: 'Erro ao excluir animal'
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: 'Animal não encontrado'
            });
        }

        res.status(200).json({
            mensagem: 'Animal excluído com sucesso'
        });
    });
});

module.exports = router;