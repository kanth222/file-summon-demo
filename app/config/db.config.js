module.exports = {
  HOST: process.env.DB_HOST || "172.16.11.53",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASSWORD || "demo-db",
  DB: process.env.DB_NAME || "nodedemo",
  PORT: process.env["DB_PORT"]
};