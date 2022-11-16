const { Model, DataTypes } = require("sequelize");
const db = require("../db/db");

class Bike extends Model {}
Bike.init(
  {
    name: { type: DataTypes.TEXT, allowNull: false },
    serial: { type: DataTypes.TEXT },
    status: { type: DataTypes.INTEGER },
    type: { type: DataTypes.TEXT },
    timeOfTheft: { type: DataTypes.TIME },
    dateOfTheft: { type: DataTypes.DATE },
    lat: { type: DataTypes.FLOAT, allowNull: false },
    lng: { type: DataTypes.FLOAT, allowNull: false },
    img: { type: DataTypes.TEXT },
  },
  { sequelize: db }
);

module.exports = Bike;

const theftArray = [
  {
    id: 1,
    name: "Red Specialized Allez",
    serial: "M3A00055",
    type: "Road Bike",
    timeOfTheft: 7.45,
    dateOfTheft: "16/11/22",
    lat: 51.5081,
    lng: 0.0759,
  },
  {
    id: 2,
    name: "Raleigh Talus 2",
    serial: "B7F04056",
    type: "Mountain Bike",
    timeOfTheft: 16.32,
    dateOfTheft: "14/11/22",
    lat: 51.7081,
    lng: 0.0852,
  },
  {
    id: 3,
    name: "Ribble AL Trail",
    serial: "J3M64092",
    type: "Hybrid",
    timeOfTheft: 16.94,
    dateOfTheft: "15/11/22",
    lat: 51.4081,
    lng: 0.0731,
  },
];
