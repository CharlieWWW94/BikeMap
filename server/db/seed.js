const db = require("./db");
const MapItem = require("../models/MapItem");

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

const seed = async () => {
  await db.sync({ force: true });
  MapItems.map(async (map) => {
    await MapItem.create(map);
  });
};

seed();

module.exports = seed;
