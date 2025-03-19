import { postMovieToApi, getMoviesFromApi } from "./api.js";
import { createMovieCards, createMovieList } from './dom.js';

const movies = await getMoviesFromApi();

const populateDOM = (movies) => {
  const movieCardsContainer = document.getElementById('movie-cards');
  movieCardsContainer.innerHTML = '';
  const movieCards = createMovieCards(movies);
  for(const movieCard of movieCards) {
    movieCardsContainer.appendChild(movieCard);
  }
}

populateDOM(movies);

// We get a reference to the form DOM element
const createMovieForm = document.getElementById('create-movie-form');

// Add an event listener to the submit action, so that we can
// capture its data as it is submitted
createMovieForm.addEventListener('submit', async (e) => {

  // We prevent the default submit action to be executed, since
  // we want to handle the data submitting ourselves.
  e.preventDefault();

  const formData = new FormData(e.target)
  const title = formData.get('movie-title');
  const overview = formData.get('movie-overview');

  const updatedMovies = await postMovieToApi({ title, overview });

  populateDOM(updatedMovies);

  // Create a new movie object from the form inputs and submit 
  // it to our web api using fetch

  e.target.reset();
})