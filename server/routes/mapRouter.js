const { Router } = require("express");
const mapRouter = Router();
const MapItem = require("../models/MapItem");
const Bike = require("../models/Bike");

mapRouter.get("/", async (req, res) => {
  const mapItems = await MapItem.findAll();
  res.status(200).json(mapItems);
});

//thefts
mapRouter.get("/thefts", async (req, res) => {
  const bikes = await Bike.findAll({ where: { status: 1 } });
  res.status(200).json(bikes);
});

module.exports = mapRouter;
