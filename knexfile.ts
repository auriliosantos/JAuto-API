import path from "path";
require("dotenv").config({ path: __dirname + "/src/.env" });

module.exports = {
  client: "pg",
  version: "7.18.2",
  connection: process.env.DATABASE_URI,
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
