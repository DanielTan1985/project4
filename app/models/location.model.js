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
      type: DataTypes.TIMESTAMP_WITH_TIME_ZONE,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.TIMESTAMP_WITH_TIME_ZONE,
      field: "updatedAt",
    },
  });

  return Location;
};
