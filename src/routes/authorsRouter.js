const express = require('express');
const Author = require('../models/Author');

const router = express.Router();

//Trova tutte le risorse con isActive uguale a true
router.get('/active', async (req, res) => {
try {
    const authors = await Author.find({ isActive: true });
    res.json(authors);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

//Trova tutte le risorse con age maggiore di 26
router.get('/age/26', async (req, res) => {
    try {
        const authors = await Author.find({ age: { $gt: 26 } });
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Trova tutte le risorse con age maggiore di 26 e minore o uguale a 30
router.get('/age/26-30', async (req, res) => {
    try {
        const authors = await Author.find({ age: { $gt: 26, $lte: 30 } });
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Trova tutte le risorse con eyes che sia brown e blue
router.get('/eyes/brown-blue', async (req, res) => {
    try {
        const authors = await Author.find({ eyeColor: { $in: ['brown', 'blue'] } });
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Trova tutte le risorse che non presentano eyes uguale a green
router.get('/eyes/not-green', async (req, res) => {
    try {
        const authors = await Author.find({ eyeColor: { $ne: 'green' }
    });
    res.json(authors);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

//Trova tutte le risorse con company uguale a "FITCORE" e ritorna solo l'email
router.get('/company/fitcore', async (req, res) => {
    try {
        const authors = await Author.find({ compagny: 'FITCORE' }).select('email');
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;