const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserCourses = sequelize.define('UserCourses', {
    enrollment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  return UserCourses;
};
