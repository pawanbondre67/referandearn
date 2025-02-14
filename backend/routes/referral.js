const express = require("express");
const { createReferral, getReferrals } = require("../controllers/referralController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create-referral", authMiddleware, createReferral);
router.get("/get-referrals", authMiddleware, getReferrals);

module.exports = router;