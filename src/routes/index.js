import express from 'express';
import { userRouter } from './user.route.js';

export const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'hell world',
    timeStamp: new Date().toISOString(),
  });
});

router.use('/users', userRouter);
