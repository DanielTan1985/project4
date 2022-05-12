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
      type: Sequelize.TIMESTAMPTZ,
      field: "createdAt",
    },
    updatedAt: {
      type: Sequelize.TIMESTAMPTZ,
      field: "updatedAt",
    },
  });

  return Cuisine;
};
