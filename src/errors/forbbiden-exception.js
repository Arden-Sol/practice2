import { HttpException } from './http-exception';

export class ForbbidenException extends HttpException {
  constructor(description = 'FORBBIDEN') {
    super(403, description);
  }
}
