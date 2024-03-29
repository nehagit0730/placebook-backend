const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const placeControllers = require("../controllers/place-controllers");
router.get("/", placeControllers.getAllPlaces);
router.get("/:placeID", placeControllers.getPlaceByID);
router.get("/user/:userID", placeControllers.getPlaceByUserID);
router.post("/", 
[
    check('title').notEmpty().escape(),
],
 placeControllers.createPlace);
router.patch("/:pid", placeControllers.updatePlace);
router.delete("/:pid", placeControllers.deletePlace);

module.exports = router;
