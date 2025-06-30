const studyLog = require("../models/studyLog");


// post route
exports.addStudyLog = async (req, res) => {
    const { subject, duration, date } = req.body;

    if (!subject || !duration || !date) {
        return res.status(400).json({ message: 'Please fill all the credentials' });
    }
    try {
        const newLog = new studyLog({
            subject,
            duration,
            date: new Date(date),
            user: req.user.id
        });
        await newLog.save();
        res.status(201).json({ message: 'Study log added', log: newLog });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}
// get all study logs
exports.getStudyLogs = async (req, res) => {
    try {
        const logs = await studyLog .find({ user: req.user.id }).sort({ date: -1 });
        res.status(200).json({ logs });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
// weekly summary
// Weekly summary: total time + time per subject
exports.getWeeklySummary = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get start and end of current week (Sunday to Saturday)
    const today = new Date();
    const day = today.getDay(); // 0 (Sun) - 6 (Sat)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - day);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);
    endOfWeek.setHours(0, 0, 0, 0);

    // Get logs for this user and this week
    const logs = await studyLog.find({
      user: userId,
      date: { $gte: startOfWeek, $lt: endOfWeek }
    });

    let totalTime = 0;
    let subjectWise = {};

    logs.forEach(log => {
      totalTime += log.duration;
      subjectWise[log.subject] = (subjectWise[log.subject] || 0) + log.duration;
    });

    res.status(200).json({
      totalTime,
      subjectWise,
      week: {
        start: startOfWeek,
        end: endOfWeek
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
