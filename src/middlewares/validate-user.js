import { BadRequestException } from '../errors/bad-request-exception.js';

export const validateUser = (req, res, next) => {
  try {
    const { method } = req;
    const { name, email } = req.body ?? {};

    switch (method) {
      case 'POST': {
        if (!name || !email) {
          throw new BadRequestException('이름과 이메일은 필수');
        }
        break;
      }
      case 'PATCH': {
        if (!name && !email) {
          throw new BadRequestException(
            '수정할 이름이나 이메일을 입력해주세요',
          );
        }
        break;
      }
    }

    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (email && (typeof email !== 'string' || emailRegex.test(email))) {
      throw new BadRequestException('올바른 이메일 형식이 아닙니다.');
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
};
