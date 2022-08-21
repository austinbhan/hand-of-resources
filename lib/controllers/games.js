const { Router } = require('express');
const { Game } = require('../models/Game');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Game.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Game.getById(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Game.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Game.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }

  });

