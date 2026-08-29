import { HttpException } from './http-exception.js';

export class ForbbidenException extends HttpException {
  constructor(description = 'FORBBIDEN') {
    super(403, description);
  }
}
