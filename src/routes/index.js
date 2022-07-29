const express = require ("express");
const controller = require("../controller/iepsController.js");
const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Recife Resiste",
        version: "1.0.0"
    })
});

router.get("/ieps", controller.getAllIeps);

module.exports = router;
