const express = require("express");

const router = express.Router();

const messageController = require("./controllers/messageController");

router.get("/messages", messageController.browse);
router.post("/messages", messageController.add);

module.exports = router;
