module.exports = {
  HOST: "./dev.sqlite",
  USER: "USER",
  PASSWORD: "PASSWORD",
  DB: "DB",
  dialect: "sqlite",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};