const sequelize = new Sequelize('d7r4o5vvh2upn9', 'postgres', '1234qwer',{
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "1234qwer",
  DB: "d7r4o5vvh2upn9",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = {
  sequelize
}







//   const sequelize = new Sequelize('d7r4o5vvh2upn9', 'postgres', '1234qwer',{
//     host: 'localhost',
//     dialect: 'postgres',
// })