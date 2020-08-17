import path from "path";

module.exports = {
  client: "pg",
  version: "7.18.2",
  connection: process.env.DATABASE_URI,
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
