const { Router } = require('express');
const { Dictator } = require('../models/Dictator');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Dictator.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Dictator.getById(req.params.id);
      res.json(data);
    } catch(e) {
      next(e);
    }
  });
