export const getMoviesFromApi = async () => {
  const movieApiResponse = await fetch('/movie');
  const { movies } = await movieApiResponse.json();
  return movies;
}

export const postMovieToApi = async (movie) => {
  const response = await fetch('/movie', {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}