import { isDevelopment, isProduction } from '../config/config';

export const cors = (req, res, next) => {
  const whiteList =
    process.env.NODE_ENV === isDevelopment
      ? ['http://localhost:5173']
      : ['https://www.naver.com', 'https://tossinvest.com'];

  const origin = req.get('Origin');
  res.vary('Origin');

  if (!origin && isDevelopment) {
    return next();
  }

  if (isProduction && !whiteList.includes(origin)) {
    return res.status(403).json({
      success: false,
      message: '허용되지 않은 출처입니다.',
    });
  }

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credential', 'true');
  res.header(
    'Access-Control-Allow-Method',
    'GET POST PUT PATCH DELETE OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.mothod === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
};
