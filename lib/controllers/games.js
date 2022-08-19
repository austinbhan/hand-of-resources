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
  });

