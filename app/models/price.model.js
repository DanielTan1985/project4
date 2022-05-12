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
      type: Sequelize.DATE,
      field: "createdAt",
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: "updatedAt",
    },
  });

  return Price;
};
