import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses';

export const getAllCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCourse = async (courseData) => {
  const response = await axios.post(API_URL, courseData);
  return response.data;
};

export const updateCourse = async (id, courseData) => {
  const response = await axios.put(`${API_URL}/${id}`, courseData);
  return response.data;
};

export const deleteCourse = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
