import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY;

export async function getMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error getting movie', error);
    return null;
  }
}

export async function getMoviesTrending() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error getting movie trending', error);
    return null;
  }
}

export async function getMovieCredits(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error getting movie credits', error);
    return null;
  }
}

export async function getMovieReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error getting movie reviews', error);
    return null;
  }
}

export const searchMovies = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  const response = await axios.get(url);
  return response.data.results;
};
