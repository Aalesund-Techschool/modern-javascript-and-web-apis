import fs from "fs/promises";

const dataFilePath = "./backend/data/movies.json";

export const getMovies = async () => {
  const file = await fs.readFile(dataFilePath, 'utf8');
  return JSON.parse(file);
}

export const insertMovie = async (movie) => {
  const moviesData = await getMovies();
  const id = moviesData.length;
  const posterUrl = '/movie-posters/default.jpg';

  const updatedMovies = [...moviesData.movies, {id, posterUrl, ...movie}];
  const updateData = { movies: updatedMovies };
  await fs.writeFile(dataFilePath, JSON.stringify(updateData, null, 2));

  return updatedMovies;
}