const { Router } = require('express');
const { Arnold } = require('../models/Arnold');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Arnold.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  });


