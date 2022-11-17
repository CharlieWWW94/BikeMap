const { Model, DataTypes } = require("sequelize");
const db = require("../db/db");

class User extends Model {}
User.init(
  {
    username: { type: DataTypes.TEXT },
    email: { type: DataTypes.TEXT },
    pwhash: { type: DataTypes.TEXT },
    salt: { type: DataTypes.TEXT },
  },
  { sequelize: db }
);

module.exports = User;
