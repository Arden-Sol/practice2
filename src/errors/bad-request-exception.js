import { HttpException } from './http-exception.js';

export class BadRequestException extends HttpException {
  constructor(description = 'BAD REQUEST') {
    super(400, description);
  }
}
