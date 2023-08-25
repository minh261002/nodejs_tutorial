const express = require("express");
const router = express.Router();
const { getHomePage, getHome } = require("../Controllers/homeController");

router.get("/", getHomePage);

router.get("/home", getHome);

module.exports = router;
