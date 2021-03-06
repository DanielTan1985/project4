const config = require("../config/db.config.js");
console.log("DB Config", config);
const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    //operatorsAliases: false,

    // pool: {
    //   max: config.pool.max,
    //   min: config.pool.min,
    //   acquire: config.pool.acquire,
    //   idle: config.pool.idle
    // }
    dialectOptions:{
      ssl:{
        required:true,
        rejectUnauthorized:false
      }
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.location = require("./location.model.js")(sequelize, Sequelize);
db.cuisine = require("./cuisine.model.js")(sequelize, Sequelize);
db.price = require("./price.model.js")(sequelize, Sequelize);

db.cuisine.belongsTo(db.location, {
  foreignKey: "cuisineId",
});
db.price.belongsTo(db.location, {
  foreignKey: "priceId",
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
