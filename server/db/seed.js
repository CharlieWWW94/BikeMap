const db = require("./db");
const MapItem = require("../models/MapItem");
const Bike = require("../models/Bike");

const MapItems = [
  {
    name: "Westminster",
    safety: 4,
    cctv: 1,
    footTraffic: "High",
    lat: 51.4975,
    lng: 0.1357,
    img: "",
  },
  {
    name: "Tower Bridge",
    safety: 5,
    cctv: 1,
    footTraffic: "High",
    lat: 51.5055,
    lng: 0.0754,
    img: "",
  },
  {
    name: "The O2",
    safety: 3,
    cctv: 1,
    footTraffic: "Medium",
    lat: 51.503,
    lng: 0.0032,
    img: "",
  },
];

const theftArray = [
  {
    id: 1,
    name: "Red Specialized Allez",
    status: 1,
    serial: "M3A00055",
    type: "Road Bike",
    timeOfTheft: 7.45,
    dateOfTheft: "2022-11-16",
    lat: 51.5081,
    lng: 0.0759,
  },
  {
    id: 2,
    name: "Raleigh Talus 2",
    status: 1,
    serial: "B7F04056",
    type: "Mountain Bike",
    timeOfTheft: 16.32,
    dateOfTheft: new Date("2022-11-12"),
    lat: 51.7081,
    lng: 0.0852,
  },
  {
    id: 3,
    name: "Ribble AL Trail",
    status: 1,
    serial: "J3M64092",
    type: "Hybrid",
    timeOfTheft: 16.94,
    dateOfTheft: "2022-11-15",
    lat: 51.4081,
    lng: 0.0731,
  },
];

const seed = async () => {
  await db.sync({ force: true });
  MapItems.map(async (map) => {
    await MapItem.create(map);
  });
  theftArray.map(async (bike) => {
    await Bike.create(bike);
  });
};

seed();

module.exports = seed;
