import express, { Router } from 'express';
import { getMovies, insertMovie } from "./data/database.js";
const router = Router();
router.use(express.json());

router.get('/helloworld', async (req, res) => {
  const example = {
    message: 'Hello Techschool 🎉🎉🎉'
  };

  res.send(example);
});

router.get('/movie', async (req, res) => {
  const movies = await getMovies();
  res.send(movies);
});

router.post('/movie', async (req, res) => {
  const updatedMovies = await insertMovie(req.body);
  res.status(201);
  res.send(updatedMovies);
});

export default router;
