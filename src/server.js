import express from 'express';

const app = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(5001, () => {
  console.log(`서버가 실행중: ${5001}`);
});
