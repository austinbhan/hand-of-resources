const { Router } = require('express');
const { Vegetable } = require('../models/Vegetable');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Vegetable.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const data = await Vegetable.getById(req.params.id);
      res.json(data);
    } catch(e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Vegetable.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }

  });

