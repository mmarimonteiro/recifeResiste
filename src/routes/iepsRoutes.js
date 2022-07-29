const express = require("express");
const controller = require("../controller/iepsController.js");

const router = express.Router();

router.get("/ieps", controller.getAllIeps);
router.get("/bairro", controller.getByBairro);
router.get("/zona", controller.getByZona);
router.post("/add", controller.createIeps);
router.patch("/:id", controller.updateIeps);
router.delete("/:id", controller.deleteIeps);

module.exports = router;