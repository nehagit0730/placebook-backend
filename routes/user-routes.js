const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user-controllers");

router.get("/", userControllers.getUsers);
router.post("/signup", userControllers.signup);
router.post("/login", userControllers.login);
router.get("/:userID", userControllers.getUserByID);
module.exports = router;
