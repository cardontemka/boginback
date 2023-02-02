const { Router } = require("express");
const { getLinks, postLink, deleteLink, getShortLink } = require("../controllers/linkController");

exports.linkRoutes = Router().get("/links", getLinks).post("/links", postLink).delete("/link/:id", deleteLink).get("/:id", getShortLink);   