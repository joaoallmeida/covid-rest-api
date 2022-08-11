const router = require("express").Router();
const Data = require("../models/models.data");

router.get("/", async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "For get all data about covid, use the address /data/covid"
      );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all data or filter by ISO CODE, CONTINENT, LOCATION, and DATE.
router.get("/data/covid", async (req, res) => {
  try {
    const { iso_code, continent, location, date, limit=10 } = req.query;
    const filter = {};

    if (iso_code) {
      filter.iso_code = iso_code;
    }

    if (continent) {
      filter.continent = continent;
    }

    if (location) {
      filter.location = location;
    }

    if (date) {
      filter.date = date;
    }

    if (limit) {
      await Data.find()
        .countDocuments()
        .then((count) => {
          if (limit > count) {
            const error = new Error("Invalid request in quantity!");
            throw error;
          }
        });
    }
    const data = await Data.find(filter).limit(Number(limit));
    res.status(200).json(data);

  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
