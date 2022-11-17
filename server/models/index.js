const Bike = require("./Bike");
const Mapitem = require("./MapItem.js");
const User = require("./User");

User.hasMany(Bike);
Bike.belongsTo(User);

module.exports = { Bike, Mapitem, User };
