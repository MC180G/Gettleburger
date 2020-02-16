var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 5000,
  user: "root",
  password: "",
  database: "burger_db"
});

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burger_db'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
