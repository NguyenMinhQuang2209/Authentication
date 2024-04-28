const History = require("../module/history.module");
const moment = require('moment-timezone');
class HistoryController {
  async getHistories(req, res) {
    try {
      const { username } = req.params;
      const histories = await History.find({ username: username }).sort(
        "-createdAt"
      );
      return res.status(200).json([...histories]);
    } catch (err) {
      return res.status(500).json({ msg: err.toString() });
    }
  }
  async createHistory(req, res) {
    try {
      const { username } = req.params;
      const { survivalTime, point } = req.body;
      const vietnamTime = moment().tz('Asia/Ho_Chi_Minh').format('h:mm DD/MM/YYYY');
        const history = new History({
            username,
            survivalTime,
            point,
            dateText: vietnamTime,
        });
      await history.save();
      return res.status(200).json({ msg: "Tạo thành công history" });
    } catch (err) {
      return res.status(500).json({ msg: err.toString() });
    }
  }
}

module.exports = new HistoryController();
