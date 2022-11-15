const { Model, DataTypes } = require("sequelize");
const db = require("../db/db");

class MapItem extends Model {}
MapItem.init(
  {
    name: { type: DataTypes.TEXT, allowNull: false },
    safety: { type: DataTypes.INTEGER },
    cctv: { type: DataTypes.INTEGER },
    footTraffic: { type: DataTypes.TEXT },
    lat: { type: DataTypes.FLOAT, allowNull: false },
    lng: { type: DataTypes.FLOAT, allowNull: false },
    img: { type: DataTypes.TEXT },
  },
  { sequelize: db }
);

module.exports = MapItem;
