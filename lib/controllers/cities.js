const { Router } = require('express');
const { City } = require('../models/City');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await City.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await City.getById(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
    
  });
