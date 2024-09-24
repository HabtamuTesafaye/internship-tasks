const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Course = sequelize.define('Course', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'courses', // Match the table name exactly
    underscored: true, // Ensures Sequelize looks for created_at and updated_at
    timestamps: true, // Enables createdAt and updatedAt fields
  });

  return Course;
};
