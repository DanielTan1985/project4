module.exports = (sequelize, Sequelize) => {
  const Cuisine = sequelize.define("cuisine", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_of_food: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.CURRENT_TIMESTAMP,
      field: "createdAt",
    },
    updatedAt: {
      type: Sequelize.CURRENT_TIMESTAMP,
      field: "updatedAt",
    },
  });

  return Cuisine;
};
