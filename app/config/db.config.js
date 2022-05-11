const sequelize = new Sequelize('d7r4o5vvh2upn9', 'postgres', '1234qwer',{
    host: 'localhost',
    dialect: 'postgres',
    
    
})

module.exports = {
  sequelize,
}






  // HOST: "localhost",
  // USER: "postgres",
  // PASSWORD: "1234qwer",
  // DB: "d7r4o5vvh2upn9",
  // dialect: "postgres",
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
