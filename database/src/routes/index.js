const { Router } = require("express");
const { getData, getDataById, createData } = require("../controllers");

const route = Router();

route.get("/:model", getData);
route.get("/:model/:id", getDataById);
route.post("/:model", createData);

module.exports = route;
