const db = require("../models");
const Measurement = db.measurement;
const Op = db.Sequelize.Op;

// Retrieve all Measurements from the database.
exports.findAll = (req, res) => {
    const device = req.query.device;
    var condition = device ? { device: { [Op.iLike]: `%${device}%` } } : null;

    Measurement.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving measurements."
        });
    });
};

// Find a single Measurement with an id
exports.find = (req, res) => {
    const id = req.params.id;
  
    Measurement.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Measurement with id=" + id
        });
      });
  };

// Find all published Tutorials
exports.findAllVibrations = (req, res) => {
    Measurement.findAll({ where: { elements: !null } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving measurements."
      });
    });
};