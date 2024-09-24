import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const getAllUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.response ? error.response.data : error.message);
    throw error; // Rethrow the error for handling in the calling function
  }
};


export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
