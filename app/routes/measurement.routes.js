module.exports = app => {
    const measurement = require("../controllers/measurement.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve a single measurement with id
    router.get("/:id", measurement.find);

    // Retrieve all measurement
    router.get("/", measurement.findAll);
  
    app.use('/api/measurement', router);
  };