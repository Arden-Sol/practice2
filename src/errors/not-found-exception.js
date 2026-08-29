import { HttpException } from './http-exception';

export class NotFoundException extends HttpException {
  constructor(description = 'NOT FOUND') {
    super(404, description);
  }
}
