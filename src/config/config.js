import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.coerce.number().min(1000).max(65535),
});

const parseEnvironment = () => {
  try {
    returnenvSchema.parse({
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
    });
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export const config = parseEnvironment();

export const isDevelopment = config.NODE_ENV === 'development';
export const isProduction = config.NODE_ENV === 'production';
export const isTest = config.NODE_ENV === 'test';
