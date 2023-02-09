const { Router } = require('express');
const { authMiddleware } = require('../common/middleware/authMiddleware');
const { getUsers, getUser } = require("../controllers/userController");

exports.userRoutes = Router().get('/users', getUsers).get('/user/:id', getUser);