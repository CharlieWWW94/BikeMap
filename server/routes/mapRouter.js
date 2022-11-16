const { Router } = require("express");
const mapRouter = Router();
const MapItem = require("../models/MapItem");

mapRouter.get("/", async (req, res) => {
  const mapItems = await MapItem.findAll();
  res.status(200).json(mapItems);
});

module.exports = mapRouter;
