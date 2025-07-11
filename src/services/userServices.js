import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const userLogin = async (userData) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, userData);
  return response;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, userData);
  return response;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, { query });
  return response.data;
};

export const addFavourites = async (movieId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${BASE_URL}/users/favourites`,
    movieId,
    config
  );
  return response.data;
};
