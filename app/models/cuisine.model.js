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
      type: Sequelize.TIMESTAMP WITH TIME ZONE,
      field: "createdAt",
    },
    updatedAt: {
      type: Sequelize.TIMESTAMP WITH TIME ZONE,
      field: "updatedAt",
    },
  });

  return Cuisine;
};
