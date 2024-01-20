

// create db connection
const mongoose = require("mongoose");
const { mongo_url } = require("../config");


const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongo_url);
    console.log("database connected successfully");
  } catch (e) {
    console.error("error while connect db",e);
  }
};

module.exports = dbConnection;







// const sql = require('mssql/msnodesqlv8');
// const config = require("../config");

// const config_Connect = {
//   server: 'LAPTOP-NO8JOFPM\\MSSQLSERVER01',
//   // user: config.USER,
//   // password: config.PASSWORD,
//   database: "the_art_work_db",
//   driver: 'msnodesqlv8',
//   options: {
//     trustedConnection: true
//   }

// };
// const poolConnect = sql.connect(config_Connect, function (error) {

//   if (error) console.log(error)
// })
// // console.log("poolConnect",poolConnect);
// // const pool = new sql.ConnectionPool(config_Connect);
// // const poolConnect = pool.connect();

// module.exports = {

//   poolConnect,
// };
