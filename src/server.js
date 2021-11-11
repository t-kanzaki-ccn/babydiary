const express = require("express");
const app = express();
app.use(express.json()); // for parsing application/json

const setupServer = () => {
  return app;
};

module.exports = { setupServer };
