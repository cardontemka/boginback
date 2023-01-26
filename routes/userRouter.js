const { Router } = require('express');
const { authMiddleware } = require('../common/middleware/authMiddleware');
const { postLink } = require('../controllers/linkController');
const { getUsers, createUser, createLink } = require("../controllers/userController");

exports.userRoutes = Router().get('/users', authMiddleware, getUsers).post('/users', createUser).put('/user/:id', createLink);