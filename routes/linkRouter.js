const { Router } = require("express");
const { getLinks, postLink } = require("../controllers/linkController");

exports.linkRoutes = Router().get("/links", getLinks).post("/links", postLink);