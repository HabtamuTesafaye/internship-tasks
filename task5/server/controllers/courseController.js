const { Course } = require('../models');

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Course.update(req.body, { where: { id } });
    if (updated) {
      const updatedCourse = await Course.findByPk(id);
      res.status(200).json(updatedCourse);
    } else {
      res.status(404).send('Course not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Course.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send('Course deleted');
    } else {
      res.status(404).send('Course not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createCourse, getAllCourses, updateCourse, deleteCourse };
