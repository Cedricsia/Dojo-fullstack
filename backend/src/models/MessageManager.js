const Abstractmanager = require("./Abstractmanager");

class MessageManager extends Abstractmanager {
  constructor() {
    super({ table: "message" });
  }
  insert(message) {
    return this.database.query(
      `INSERT INTO ${this.table} (content,author) VALUES (?,?)`,
      [message.content, message.author]
    );
  }
  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = MessageManager;
