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
  });
