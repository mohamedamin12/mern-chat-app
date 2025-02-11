const { sendMessage ,  getMessages} = require('../controllers/message.controller');
const protectRoute = require('../middleware/protectRoute');

const router = require('express').Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);



module.exports = router;