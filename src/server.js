import express from 'express';
import { logger } from './middlewares/logger.js';
import { config } from './config/config.js';
import { cors } from './middlewares/cors.js';

const app = express();

app.use(cors);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

app.listen(config.PORT, () => {
  console.log(`서버가 실행중: ${config.PORT}`);
});
