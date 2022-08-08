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
  }
  );
