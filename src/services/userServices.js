import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const userLogin = async (userData) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, userData);
  return response;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, { userData });
  if (response.status !== 200) {
    return Promise.reject(new Error("Login failed"));
  } else {
    return response.data;
  }
};

// modules.exports = {userLogin,registerUser}
