const { Router } = require("express");
const { signup, login } = require("../controllers/authController");

exports.authRouter = Router().post("/sign", signup).post("/login", login);
