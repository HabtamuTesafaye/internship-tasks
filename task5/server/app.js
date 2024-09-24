const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDb, User, Course, UserCourses } = require('./models');
const userRoutes = require('./routes/users');
const courseRoutes = require('./routes/courses');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
    // Start your server only after the database connection is successful
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(error => {
    console.error('Failed to connect to the database:', error);
  });
  