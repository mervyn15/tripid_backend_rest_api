const mysql = require("mysql");
const dbConfig = require('../../config/db.config');
var dbConn = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

/* dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
}) */

module.exports = dbConn;