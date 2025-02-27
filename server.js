const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./app/routes/measurement.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});