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

  });

  return Cuisine;
};
