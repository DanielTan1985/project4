// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize('d7r4o5vvh2upn9', 'bimumvggwjprjc', '1d670fcd93a18be2cefeae429e845731e01788cd626b2e8382ec7798467bf7cf',{
//   HOST: "ec2-54-80-122-11.compute-1.amazonaws.com",
//   USER: "bimumvggwjprjc",
//   PASSWORD: "1d670fcd93a18be2cefeae429e845731e01788cd626b2e8382ec7798467bf7cf",
//   DB: "d7r4o5vvh2upn9",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })
// module.exports = {
//   sequelize
// }



//testing

module.exports = {
  HOST: "ec2-54-80-122-11.compute-1.amazonaws.com",
  USER: "bimumvggwjprjc",
  PASSWORD: "1d670fcd93a18be2cefeae429e845731e01788cd626b2e8382ec7798467bf7cf",
  DB: "d7r4o5vvh2upn9",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
