import express from 'express';
import { NotFoundException } from '../errors/not-found-exception.js';
import { validateUser } from '../middlewares/validate-user.js';

export const userRouter = express.Router();

let users = [
  { id: 1, name: '김하늘', email: 'kim@example.com' },
  { id: 2, name: '이준호', email: 'lee@example.com' },
  { id: 3, name: '박서연', email: 'jin@example.com' },
  { id: 4, name: '최민준', email: 'boh@example.com' },
  { id: 5, name: '정다은', email: 'baek@example.com' },
  { id: 6, name: '한지우', email: 'han@example.com' },
  { id: 7, name: '오세훈', email: '5ohe@example.com' },
  { id: 8, name: '윤수빈', email: 'yun@example.com' },
  { id: 9, name: '강민지', email: 'minji@example.com' },
  { id: 10, name: '신현우', email: 'shin@example.com' },
  { id: 11, name: '서지훈', email: 'seo@example.com' },
  { id: 12, name: '홍예린', email: 'hong@example.com' },
  { id: 13, name: '조태현', email: 'joe@example.com' },
  { id: 14, name: '임나연', email: 'rim@example.com' },
  { id: 15, name: '배도윤', email: 'youn@example.com' },
];

let nextId = 16;

userRouter.get('/', (req, res) => {
  res.json({
    success: true,
    data: { users, count: users.length },
    message: '유저 목록 불러오기 성공',
  });
});

userRouter.get('/:userId', (req, res, next) => {
  const userId = Number(req.params.userId);
  const user = users.find((user) => user.id === userId);

  try {
    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다');
    }

    res.status(200).json({
      success: true,
      data: user,
      message: '사용자 아이디를 가져왔습니다.',
      userId,
    });
  } catch (error) {
    next(error);
  }
});

userRouter.post('/', validateUser, (req, res, next) => {
  try {
    const { email, name } = req.body ?? {};
    const newUser = {
      id: nextId++,
      name,
      email,
    };

    users.push(newUser);

    res.status(201).json({
      message: '사용자 생성됨',
      success: true,
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
});

userRouter.patch('/:userId', validateUser, (req, res, next) => {
  try {
    const { email, name } = req.body ?? {};
    const userId = Number(req.params.userId);

    const user = users.find((user) => user.id === userId);

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    res.status(200).json({
      message: '사용자 수정',
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

userRouter.delete('/:userId', (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const user = user.find((user) => user.id === userId);

    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }

    users = users.filter((user) => user.id !== userId);

    return res.json({
      message: '유저정보삭제됨',
      userId,
      success: true,
    });
  } catch (error) {
    next(error);
  }
});
