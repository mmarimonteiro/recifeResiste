const express = require("express");
const index = require('./routes/index.js');
const ieps = require ('./routes/iepsRoutes.js');

require("dotenv-safe").config();

const cors = require("cors"); 
const swaggerFile = require("../swagger/swagger_output.json");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("./database/mongooseConnect");

mongoose.connect()
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', index);
app.use("/ieps", ieps);
app.use("/minha-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app