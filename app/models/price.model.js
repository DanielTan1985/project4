module.exports = (sequelize, Sequelize) => {
  const Price = sequelize.define("price", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cost: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.FROM_TZ,
      field: "createdAt",
    },
    updatedAt: {
      type: Sequelize.FROM_TZ,
      field: "updatedAt",
    },
  });

  return Price;
};
