const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { getStudyLogs, addStudyLog, getWeeklySummary } = require("../controllers/studyLogController");


router.post("/studyLog", authMiddleware, addStudyLog);
router.get("/studyLog", authMiddleware, getStudyLogs);
router.get("/summary", authMiddleware, getWeeklySummary);


module.exports = router;
