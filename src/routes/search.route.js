import express from 'express';

export const searchRouter = express.Router();

searchRouter.get('/', (req, res) => {
  const sort = req.query.sort ?? 'asc';
  const rawLimit = req.query.limit ?? '10';
  const keyword = req.query.keyword ?? '';
  const limit = Number(rawLimit);

  if (!['asc', 'desc'].includes(sort)) {
    return res.status(400).json({
      message: 'sort는 asc or desc',
    });
  }

  if (limit <= 0) {
    return res.status(400).json({
      message: 'limit는 0과 같거나 작을 수 없습니다.',
    });
  }

  if (keyword.length > 20) {
    return res.status(400).json({
      message: '키워드는 20자 초과 불가',
    });
  }

  res.status(200).json({
    sort,
    limit,
    keyword,
  });
});
