const debug = require("debug")("starterbot:db_connections");
/**
 * This will return a pool of connections to allow multiple connections at once.
 * Using this for only logging at this point
 */
const mysql = require("mysql");
const config = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

const sqlPool = mysql.createPool(config);

/**
 * logs the user request for reporting
 * @param {string} type request type
 * @param {object} params params requested
 * @param {string} user username of the requester
 */
async function logRequest(type, params, user) {
  if (process.env.NODE_ENV === "production") {
    sqlPool.query(
      `INSERT INTO logs
      (request_type, request_params, added_by)
      VALUES
      (?,?,?)`,
      [type, JSON.stringify(params), user],
      function (error, results) {
        if (error) {
          debug(`error logging request: ${error}`);
        } else {
          debug("action logged");
        }
      }
    );
  }
}

module.exports = {
  mysql,
  sqlPool,
  logRequest,
};
