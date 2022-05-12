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
      type: Sequelize.TIMESTAMP WITH TIME ZONE,
      field: "createdAt",
    },
    updatedAt: {
      type: Sequelize.TIMESTAMP WITH TIME ZONE,
      field: "updatedAt",
    },
  });

  return Price;
};
