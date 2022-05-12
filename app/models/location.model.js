module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    located_at: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cuisine: {
      //(FK)
      type: Sequelize.STRING,
      allowNull: false,
      field: "cuisine",
    },
    price: {
      //(FK)
      type: Sequelize.STRING,
      allowNull: false,
      field: "price",
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updatedAt",
    },
  });

  return Location;
};
