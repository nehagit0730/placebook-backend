const express = require("express");
const router = express.Router();
const placeControllers = require("../controllers/place-controllers");

router.get("/:placeID", placeControllers.getPlaceByID);
router.get("/user/:userID", placeControllers.getPlaceByUserID);

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.json({ success });
});

module.exports = router;
