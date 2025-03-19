import express, { Router } from 'express';

const router = Router();
router.use(express.json());

router.get('/helloworld', async (req, res) => {
  const example = {
    message: 'Hello Techschool 🎉🎉🎉'
  };

  res.send(example);
});

export default router;
