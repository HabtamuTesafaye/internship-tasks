const { Sequelize } = require('sequelize');
require('dotenv').config();  // Load environment variables

console.log('DATABASE_URL:', process.env.DATABASE_URL);  // Check if it's loaded

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: console.log,
});

// Import models
const User = require('./user')(sequelize);
const Course = require('./course')(sequelize);
const UserCourses = require('./userCourses')(sequelize);

// Define relationships
User.belongsToMany(Course, { through: UserCourses });
Course.belongsToMany(User, { through: UserCourses });

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Export models and connectDb function
module.exports = { sequelize, User, Course, UserCourses, connectDb };
