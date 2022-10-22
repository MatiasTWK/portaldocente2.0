const express = require('express');
const cursoSchema = require('../models/cursos');

const router = express.Router();

//AÑADIR UN CURSO
router.post('/cursos', (req, res) => {
    const curso = cursoSchema(req.body);
    curso
        .save()
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

//OBTENER CURSO
router.get('/cursos', (req, res) => {
    cursoSchema
        .find()
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

//ACTUALIZAR UN CURSO
router.put('/cursos/:id', (req, res) => {
    const { id } = req.params;
    const { curso } = req.body;
    cursoSchema
        .updateOne({ _id: id }, { $set: { rut, pass } })
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

//ELIMINAR UN CURSO
router.delete('/cursos/:id', (req, res) => {
    const { id } = req.params;
    cursoSchema
        .remove({ _id: id })
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;