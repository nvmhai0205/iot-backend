const express = require('express');
const rootRoutes = express.Router();

const userRouter = require('./user.routes');

rootRoutes.use('/user', userRouter);

module.exports = rootRoutes;