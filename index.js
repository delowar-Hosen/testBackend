const express = require("express");
const { dbConfig } = require("./config/dbConfig");
const routes = require("./routes");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT;

dbConfig();
app.use(routes);

app.listen(port, () => {
  console.log(`Port Running On ${port}`);
});
