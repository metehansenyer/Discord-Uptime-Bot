const { databaseLog, errorLog } = require("../src/functions/log");
const mongoose = require("mongoose");
require('dotenv').config()

module.exports = async () => {
  
  mongoose.connect(process.env['MONGODB_TOKEN'])
    .then(x => databaseLog())
    .catch(error => errorLog(error));

  mongoose.connection.on('error', (error) => {
    errorLog(error);
  });
  
}