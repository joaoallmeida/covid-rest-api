const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const connectToMongoDB = require("./src/database/mongoConnection");
const mongodbConn = require("./src/database/mongoConnection");
const router = require("./src/routes/covidDataRoute");
const app = express();

let port = 2277;
let baseVersion = "/api/v1.0"

dotenv.config();
connectToMongoDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`Resquest Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  
  next();
});

app.use(baseVersion, router)

app.listen(port, () => console.log(`Server listening port: ${port}`));