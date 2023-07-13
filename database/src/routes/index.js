const { Router } = require("express");
const { getData, getDataById } = require("../controllers");

const route = Router();

route.get("/:model", getData);
route.get("/:model/:id", getDataById);

module.exports = route;
