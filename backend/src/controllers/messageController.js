const MessageManager = require("../models/MessageManager");

const MessageTable = new MessageManager();

const browse = async (req, res) => {
  try {
    const [result] = await MessageTable.findAll();
    res.json(result);
    // res.send(result)
  } catch (err) {
    console.error(err);
    res.status(500).json;
  }
};

const add = async (req, res) => {
  try {
    const message = req.body;

    const [result] = await MessageTable.insert(message);

    if (result.affectedRows) {
      res.sendstatus(201);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = { browse, add };
