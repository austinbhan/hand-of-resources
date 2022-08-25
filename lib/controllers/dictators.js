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
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Dictator.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Dictator.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Dictator.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
  

